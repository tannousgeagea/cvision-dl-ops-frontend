// pages/Dataset.js
import React, { useState } from "react";
import useFetchData from "../../hooks/use-fetch-data";
import ImageCard from "../../components/ui/card/image-card";
import { useParams } from "react-router-dom";
import FilterTabs from "../../components/ui/filter/filter-tabs";
import Spinner from '../../components/ui/animation/spinner'
import PaginationControls from "../../components/ui/actions/pagination-control";
import DatasetActions from "../../components/ui/actions/dataset-actions";

import "./dataset.css";

const Dataset = () => {
  const { projectId } = useParams()
  const [selectedFilter, setSelectedFilter] = useState("unannotated");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 30;

  const getFilterParams = () => {
    switch (selectedFilter) {
      case "annotated":
        return { annotated: true, reviewed: false };
      case "reviewed":
        return { annotated: false, reviewed: true };
      default:
        return { annotated: false, reviewed: false };
    }
  };

  const filterParams = getFilterParams();
  const { data, loading, error, refetch } = useFetchData(
    `/api/v1/projects/${projectId}/images?annotated=${filterParams.annotated}&reviewed=${filterParams.reviewed}&items_per_page=${itemsPerPage}&page=${currentPage}`
  );

  const filters = [
    { key: "unannotated", label: "Unannotated", count: data?.unannotated || 0  },
    { key: "annotated", label: "Annotated", count: data?.annotated || 0  },
    { key: "reviewed", label: "Reviewed", count: data?.reviewed || 0  },
  ];

  const totalRecord = data?.total_record || 0;
  const imageData = data?.data || []
  if (error) return <p>Error loading images: {error.message}</p>;

  return (
    <div className="dataset">
        <h1>Dataset</h1>
        <div className="tabs">
          <FilterTabs 
            filters={filters}
            selectedFilter={selectedFilter}
            onSelectFilter={(filter) => {
              setSelectedFilter(filter);
              setCurrentPage(1);
            }}
          />

          <DatasetActions
            projectId={projectId}
            refetch={refetch}
            onFeedbackSuccess={() => setCurrentPage(1)}
          />

        </div>

        {loading ? (
          <div className="image-grid">
            <Spinner />
          </div>
        ) : totalRecord === 0 ? (
          <div className="no-results">
            <i className="info-icon">ℹ️</i>
              <span>The search returned 0 results.</span>
          </div>
        ) : (
          <div className="image-grid">
            {imageData.map((image) => (
                <ImageCard key={image.image_id} image={image} />
            ))}
          </div>

        )}

      {totalRecord > 0 && (
        <PaginationControls
          currentPage={currentPage}
          totalPages={data.pages}
          onNext={() => setCurrentPage((prev) => prev + 1)}
          onPrevious={() => setCurrentPage((prev) => prev - 1)}
        />
      )}


    </div>
  );
};

export default Dataset;
