import React from "react";
import { useState, useEffect } from "react";
import SortFilter from "../components/ui/filter/filter-sort";
import SearchFilter from "../components/ui/filter/filter-search";
import ScrollFilter from "../components/ui/filter/filter-scroll";
import useFetchData from '../hooks/use-fetch-data';
import ImagePreview from "../components/feature/image-preview";
import DatasetIcon from '../assets/icons/dataset.png'
import './dataset.css'


const Dataset = () => {
    const { data: images, loading: loadingImages, error: errorImages } = useFetchData('/api/v1/images');
    const order = ['Newest', 'Oldest']
    const [filteredImages, setFilteredImages] = useState([]);
    const plantValues = Array.from(new Set(images.map(image => image.plant)));
    const edgeBoxValues = Array.from(new Set(filteredImages.map(image => image.edge_box)));

    useEffect(() => {
        setFilteredImages(images);
    }, [images]);
    
    const handleSearchChange = (searchTerm) => {
        const filtered = images.filter(image =>
            image.image_name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredImages(filtered);
    };

    const handlePlantChange = (searchTerm) => {
      const filtered = images.filter(image =>
          image.plant.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredImages(filtered);
    };

    const handleEdgeBoxtChange = (searchTerm) => {
      const filtered = filteredImages.filter(image =>
          image.edge_box.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredImages(filtered);
    };

    const handleSortChange = (sortOrder) => {
      const sorted = [...filteredImages].sort((a, b) => {
          if (sortOrder === 'Newest') {
              return new Date(b.created_at) - new Date(a.created_at);
          } else {
              return new Date(a.created_at) - new Date(b.created_at);
          }
      });
      setFilteredImages(sorted);
  };


  return (
      <div className="home-container">
        <div className="home-content">
          <div className='section-header'>
            <img src={DatasetIcon} className="header-icon"></img>
            <span>Dataset</span>
          </div>
  
          <div className='dataset-content-section'>
              <div className="dataset-filter-section">

                <SearchFilter 
                  placeholder={"Filter by filename"}
                  onSearchChange={handleSearchChange}

                />

              <ScrollFilter
                  name="Plant"
                  data={plantValues}
                  onFilterChange={handlePlantChange}
                />

                <ScrollFilter
                  name="Edge Box"
                  data={edgeBoxValues}
                  onFilterChange={handleEdgeBoxtChange}
                />

                <SortFilter
                  name="Sort By"
                  data={order}
                  onSortChange={handleSortChange}
                />
              </div>
              <div className='image-preview-section'>
              <ImagePreview 
                  images={filteredImages}
              />
              </div>
          </div>
  
        </div>
      </div>
    );
}

export default Dataset