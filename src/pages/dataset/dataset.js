// pages/Dataset.js
import React, { useEffect, useState } from "react";
import useFetchData from "../../hooks/use-fetch-data";
import ImageCard from "../../components/ui/card/image-card";
import { useParams } from "react-router-dom";
import "./dataset.css";
import feedbackIcon from '../../assets/icons/feedback.png'
import FilterTabs from "../../components/ui/filter/filter-tabs";
import Spinner from '../../components/ui/animation/spinner'

const Dataset = () => {
  const { projectId } = useParams()
  const [selectedFilter, setSelectedFilter] = useState("unannotated");

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

  const filters = [
    { key: "unannotated", label: "Unannotated", count: 0 },
    { key: "annotated", label: "Annotated", count: 0 },
    { key: "reviewed", label: "Reviewed", count: 0 },
  ];

  const filterParams = getFilterParams();
  const { data, loading, error } = useFetchData(
    `/api/v1/projects/${projectId}/images?annotated=${filterParams.annotated}&reviewed=${filterParams.reviewed}`
  );

  const totalRecord = data?.total_record || 0;
  const imageData = data?.data || []
  const dynamicFilters = filters.map((filter) => ({
    ...filter,
    count: data?.[filter.key] || 0,
  }));

  if (error) return <p>Error loading images: {error.message}</p>;

  return (
    <div className="dataset">
        <h1>Dataset</h1>
        <div className="tabs">
          <FilterTabs 
            filters={dynamicFilters}
            selectedFilter={selectedFilter}
            onSelectFilter={setSelectedFilter}
          />
          <div className="request-feedback">
            <img src={feedbackIcon} alt="feedback-icon"/>
            <span>Request Feedback</span>
          </div>
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
                // <div key={image.image_id} className="image-card">
                //     {/* <img src={image.image_url} alt={image.image_name} />
                //     <p>{image.image_name}</p> */}
                //     <ImageCard key={image.image_id} image={image} />
                // </div>
                <ImageCard key={image.image_id} image={image} />
            ))}
          </div>
        )}
    </div>
  );
};

export default Dataset;
