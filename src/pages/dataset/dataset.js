// pages/Dataset.js
import React, { useEffect, useState } from "react";
import useFetchData from "../../hooks/use-fetch-data";
import ImageCard from "../../components/ui/card/image-card";
import { useParams } from "react-router-dom";
import "./dataset.css";

const Dataset = () => {
    const { projectId } = useParams()
  const { data, loading, error } = useFetchData(`/api/v1/projects/${projectId}/images`);
  
  if (loading) return <p>Loading images...</p>;
  if (error) return <p>Error loading images: {error.message}</p>;

  return (
    <div className="dataset">
        <h1>Dataset</h1>
        <div className="image-grid">
            {data.map((image) => (
                <div key={image.image_id} className="image-card">
                    {/* <img src={image.image_url} alt={image.image_name} />
                    <p>{image.image_name}</p> */}
                    <ImageCard key={image.image_id} image={image} />
                </div>
            ))}
        </div>
    </div>
  );
};

export default Dataset;
