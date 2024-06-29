import React, { useRef, useEffect, useCallback } from "react";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import CompanyCard from "../../components/company/CompanyCard";
import CompanyHeader from "../../components/company/CompanyHeader";
import Loader from "../../components/Loader";
import { CompanyCardProps } from "../../types/company";
import Loading from "../../components/Loading";
import { CompanyAPI } from "../../apis/Company";

export default function CompanyList() {
    // 관찰하려는 DOM 요소
    const observerElem = useRef<HTMLDivElement | null>(null);
    // Intersection Observer 인스턴스에 대한 참조
    const intersectionObserver = useRef<IntersectionObserver | null>(null);

    const { data: pageInfo } = useQuery({
        queryKey: ["pageInfo"],
        queryFn: CompanyAPI.fetchPageInfo
    });

    const {
        data: companies,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading
    } = useInfiniteQuery({
        queryKey: ["companies"],
        queryFn: ({ pageParam = 1 }) => CompanyAPI.fetchCompanies(pageParam),
        initialPageParam: 1,
        getNextPageParam: lastPage =>
            lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined
    });

    /**
     * 사용 가능한 다음 페이지가 있고 아직 다음 페이지를 가져오고 있지 않은 경우 다음 페이지 가져오기를 트리거 하는 함수
     */
    const loadMore = useCallback(() => {
        if (hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

    /**
     * observerElem을 관찰
     * 관찰된 요소(목록 하단)가 교차(표시)되면 'loadMore'를 호출하여 다음 페이지를 가져옵니다.
     * 구성 요소가 마운트 해제되거나 종속성이 변경되면 관찰자가 정리됩니다.
     */
    useEffect(() => {
        if (intersectionObserver.current) intersectionObserver.current.disconnect();

        intersectionObserver.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasNextPage) {
                loadMore();
            }
        });

        if (observerElem.current) {
            intersectionObserver.current.observe(observerElem.current);
        }

        return () => {
            if (intersectionObserver.current) {
                intersectionObserver.current.disconnect();
            }
        };
    }, [loadMore, hasNextPage]);

    if (error) return <div>Error: {error.message}</div>;
    if (isLoading) return <Loading />;

    return (
        <div className="pt-[86px] px-20">
            <CompanyHeader totalElements={pageInfo?.totalElements} />
            <div className="pt-11">
                <div className="grid grid-cols-3 gap-x-8 gap-y-5">
                    {companies?.pages.map((page, index) => (
                        <React.Fragment key={index}>
                            {page.data.map((company: CompanyCardProps) => (
                                <CompanyCard
                                    key={company.id}
                                    id={company.id}
                                    image={company.image}
                                    name={company.name}
                                    talents={company.talents}
                                    location={company.location}
                                    url={company.url}
                                />
                            ))}
                        </React.Fragment>
                    ))}
                </div>
                {(isFetchingNextPage || hasNextPage) && <Loader />}
                <div ref={observerElem} className="w-full h-10 mb-10" />
            </div>
        </div>
    );
}
