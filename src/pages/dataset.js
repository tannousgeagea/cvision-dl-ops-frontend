import React from "react";
import { useState } from "react";
import ScrollFilter from "../components/ui/filter-scroll";
import useFetchData from '../hooks/use-fetch-data';
import ImagePreview from "../components/feature/image-preview";
import './dataset.css'

const Dataset = () => {
    const { data: images, loading: loadingImages, error: errorImages } = useFetchData('/api/v1/images');
    const classes = ['plastic', 'waste', 'paper']
    const [selectedClass, setSelectedClass] = useState('nan');

    return (
        <div className="home-container">
          <div className="content">
            <div className='content-header'>
              <span>Dataset</span>
            </div>
    
            <div className='dataset-content-section'>
                <div className="dataset-filter-section">
                  <ScrollFilter
                    name="Classes"
                    data={classes}
                    filter_value={selectedClass}
                    onFilterChange={setSelectedClass}
                  />

                  <ScrollFilter
                    name="Sort By"
                    data={classes}
                    filter_value={selectedClass}
                    onFilterChange={setSelectedClass}
                  />

                  <ScrollFilter
                    name="Project"
                    data={classes}
                    filter_value={selectedClass}
                    onFilterChange={setSelectedClass}
                  />
                </div>
                <div className='image-preview-section'>
                <ImagePreview 
                    images={images}
                />
                </div>
            </div>
    
          </div>
        </div>
      );
}

export default Dataset