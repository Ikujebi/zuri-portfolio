import React, { useState } from 'react';
import { Row, Col } from 'antd'; // Assuming you've imported Ant Design components
import react from '../assets/images/react.png'
import node from '../assets/images/node.png'
import js from '../assets/images/js.png'
import webdesign from '../assets/images/webp.png'
import tail from '../assets/images/tail.png'
import css from '../assets/images/css.jpg'
import mongo from '../assets/images/mongo.jpg'
import vite from '../assets/images/vite.jpg'
import antd from '../assets/images/antd.png'
import { Link } from 'react-router-dom';

function Stack() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  const portfolioItems = [
    {
      category: 'react',
      image: react,
    },
    {
      category: 'node',
      image: node,
    },
    {
      category: 'javascript',
      image: js,
    },
    {
      category: 'webdesign',
      image: webdesign,
    },
    {
      category: 'tailwind',
      image: tail,
    },
    {
      category: 'css',
      image: css,
    },
    {
      category: 'antd',
      image: antd,
    },
    {
      category: 'mongo',
      image: mongo,
    },
    {
      category: 'vite',
      image: vite,
    },
  ];
  

  const filteredItems = selectedFilter === 'all' ? portfolioItems : portfolioItems.filter(item => item.category === selectedFilter);

  return (
    <div id="portfolio" className="flex flex-col justify-center items-center">
      <div className="container">
        <div className="section-title mb-5 text-center font-bold text-2xl">
          <h2>WHAT I KNOW</h2>
        </div>
      </div>

      <div className="container pointer">
        <div className="row pointer">
          <div className=" pointer">
            <div className="portfolio-list pointer">
              <ul className="nav list-unstyled mb-[4rem] flex justify-center items-center gap-4 text-gray-600 font-bold cursor-pointer " id="portfolio-flters">
                <li
                  className={`filter ${selectedFilter === 'all' ? 'filter-active' : ''} `}
                  data-filter="all"
                  onClick={() => handleFilterClick('all')}
                >
                  All
                </li>
                <li
                  className={`filter ${selectedFilter === 'react' ? 'filter-active' : ''}`}
                  data-filter="react"
                  onClick={() => handleFilterClick('react')}
                >
                  React
                </li>
                <li
                  className={`filter ${selectedFilter === 'node' ? 'filter-active' : ''}`}
                  data-filter="react"
                  onClick={() => handleFilterClick('node')}
                >
                  Node
                </li>
                <li
                  className={`filter ${selectedFilter === 'javascript' ? 'filter-active' : ''}`}
                  data-filter="javascript"
                  onClick={() => handleFilterClick('javascript')}
                >
                  JavaScript
                </li>
                <li
                  className={`filter ${selectedFilter === 'webdesign' ? 'filter-active' : ''}`}
                  data-filter="webdesign"
                  onClick={() => handleFilterClick('webdesign')}
                >
                  Web Design
                </li>
                <li
                  className={`filter ${selectedFilter === 'tailwind' ? 'filter-active' : ''}`}
                  data-filter="react"
                  onClick={() => handleFilterClick('tailwind')}
                >
                  Tailwind
                </li>
                <li
                  className={`filter ${selectedFilter === 'css' ? 'filter-active' : ''}`}
                  data-filter="react"
                  onClick={() => handleFilterClick('css')}
                >
                  CSS
                </li>
                <li
                  className={`filter ${selectedFilter === 'antd' ? 'filter-active' : ''}`}
                  data-filter="react"
                  onClick={() => handleFilterClick('antd')}
                >
                  ANT DESIGN
                </li>
                <li
                  className={`filter ${selectedFilter === 'mongo' ? 'filter-active' : ''}`}
                  data-filter="react"
                  onClick={() => handleFilterClick('mongo')}
                >
                  Mongo DB
                </li>
                <li
                  className={`filter ${selectedFilter === 'vite' ? 'filter-active' : ''}`}
                  data-filter="react"
                  onClick={() => handleFilterClick('vite')}
                >
                  VITE
                </li>
               
              </ul>
            </div>

            <div className="flex justify-center items-center px-2">
              <Row gutter={[16, 16]}>
                {filteredItems.map((item, index) => (
                  <Col lg={6} md={12} sm={24} className={`portfolio-thumbnail all ${item.category}`} key={index}>
                    <Link className="popup-img" href={item.image}>
                        <div className=' h-[15rem] xl:w-[15rem] lg:w-[15rem] md:w-[15rem] px-2 w-[7rem] mx-auto'>
                      <img  src={item.image} alt="img" />
                      </div></Link>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stack;
