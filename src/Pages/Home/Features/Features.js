import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useItems from "../../../Hooks/useItems";
import './Features.css'

const Features = () => {
    const [items] = useItems();

    const firstTab = items.slice(6,12);

    const secondTab = items.slice(8,14);
    const thirdTab = items.slice(0,6);

  return (
    <div className="features container mt-5">
        <h1 className="features-title">Featured </h1>
        <p className="w-50 m-auto pb-5 ">You can select you car by filter here. We supplies the most low price rates. You buy our cars at very cheap rate and can save money.</p>
      <Tabs>
        <TabList className="border-0 tabList">
          <Tab><h5>Popular</h5></Tab>
          <Tab><h5>Brand New</h5></Tab>
          <Tab><h5>Used</h5></Tab>
        </TabList>

        <TabPanel>
        <div className="tabs">
          {
              firstTab.map(tab => 

             
                  <div className="p-2 tab" key={tab._id}>
                  <img src={tab.img} alt="" />
                  <hr />
                  <h1>{tab.name}</h1>
                  
              </div>)
          }
          </div>
        </TabPanel>
        <TabPanel>
         <div className="tabs">
          {
              secondTab.map(tab => 

             
                  <div className="p-2 tab"  key={tab._id}>
                  <img src={tab.img} alt="" />
                  <hr />
                  <h1>{tab.name}</h1>
                  
              </div>)
          }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="tabs">
          {
              thirdTab.map(tab => 

             
                  <div className="p-2 tab"  key={tab._id}>
                  <img src={tab.img} alt="" />
                  <hr />
                  <h1>{tab.name}</h1>
                  
              </div>)
          }
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Features;
