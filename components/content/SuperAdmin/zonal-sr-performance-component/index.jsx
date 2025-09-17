'use client'
import React, { useState } from 'react'
import Tabs from './Tabs'
import DocumentTable from './Tables/DocumentTable';
import moment from 'moment'
import SalesRepTable from './Tables/SalesRepTable'
import DetailsModal from './Modals/DetailsModal'
import DetailsSrModal from './Modals/DetailsSrModal'
import SearchInput from '@/components/reuseable/SearchInput'
import Button from '@/components/reuseable/Button'
import CustomDropdown from '@/components/reuseable/CustomDropdown'
// import CustomDatePicker from '@/components/reuseable/CustomDatePicker';

const ZonalSrPerformanceComponent = () => {
  const [modal, setModal] = useState("")
  const [tabs, setTabs] = useState(1)
  const [obj, setObj] = useState({})

  // const [depStartDate, setDepStartDate] = useState(moment().startOf('month').format('YYYY-MM-DD'));
  // const [depEndDate, setDepEndDate] = useState(moment().endOf('month').format('YYYY-MM-DD'));
  // const [salesByDep, setSalesByDep] = useState([]);
  // const [salesByDepLoader, setSalesByDepLoader] = useState(false);

  // const handleDepDate = (start, end) => {
  //   setDepStartDate(start);
  //   setDepEndDate(end);
  // };

  const tabList = [
    { id: 1, name: "Zonal In-Charges", },
    { id: 2, name: "Sale Representative", },
  ]
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='w-full  '>
      {modal == "details" && <DetailsModal setModal={setModal} />}
      {modal == "detailsSr" && <DetailsSrModal setModal={setModal} obj={obj}/>}
      <Tabs tabList={tabList} tabs={tabs} setTabs={setTabs} />
      <div className='px-10'>
        {tabs == 1 &&
          <>
            <div className='flex gap-4 w-full justify-between items-center'>
              <div className='flex flex-1 w-full mt-5'>
                <SearchInput
                  placeholder="Search by Name, Id"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  extraClass={``}
                />
              </div>
              <CustomDropdown />

              {/* <div className=" flex justify-center">
                <CustomDatePicker
                  value={[{ startDate: depStartDate, endDate: depEndDate }]}
                  handleChange={handleDepDate}
                />
              </div> */}
            </div>
            <DocumentTable setModal={setModal} setObj={setObj} />
          </>
        }
        {tabs == 2 &&
          <>
            <div className='flex gap-4 w-full justify-between items-center '>
              <div className='flex flex-1 w-full mt-5'>
                <SearchInput
                  placeholder="Search by Name, Id"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  extraClass={``}
                />
              </div>
              <CustomDropdown />

              {/* <div className=" flex justify-center">
                <CustomDatePicker
                  value={[{ startDate: depStartDate, endDate: depEndDate }]}
                  handleChange={handleDepDate}
                />
              </div> */}
            </div>
            <SalesRepTable setModal={setModal} setObj={setObj} />
          </>
        }
      </div>
    </div>
  )
}

export default ZonalSrPerformanceComponent


