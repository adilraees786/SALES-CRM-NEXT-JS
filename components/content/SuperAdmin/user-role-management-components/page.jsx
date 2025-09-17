// import React, { useState } from 'react'
// import Tabs from './Tabs'
// import DocumentTable from './Tables/DocumentTable'
// import Button from '../../ReusableComponent/Button'
// import SearchInput from '../../ReusableComponent/SearchInput'
// import EditZonalModal from './Modals/EditZonalModal'
// import CreateZonalModal from './Modals/CreateZonalModal'
// import SalesRepTable from './Tables/SalesRepTable'
// import CreateSrModal from './Modals/CreateSrModal'
// import EditSrModal from './Modals/EditSrModal'
// import { sales } from '../../../assets'
// import SalesExecutive from './SalesExecutive'

// const UserRoleManagementComponents = () => {
//     const [modal, setModal] = useState("")
//     const [tabs, setTabs] = useState(1)
//     const [obj, setObj] = useState({})

//     const tabList = [
//         { id: 1, name: "Zonal In-Charges", },
//         { id: 2, name: "Sale Representative", },
//         { id: 3, name: "Sales Executive", },
//     ]
//     const [searchTerm, setSearchTerm] = useState('');

//     const handleSearchChange = (e) => {
//         setSearchTerm(e.target.value);
//     };

//     return (
//         <>
//             {/* Zonal In-Charges Modals start  */}
//             <div className={`${modal == "create" ? "w-[140%]" : ""}  fixed top-0 right-0   transition-transform duration-500 ease-in-out
//                 ${modal === "create" ? "translate-x-0 z-[99999] " : " translate-x-[540px] z-50"}`}>
//                 <CreateZonalModal setModal={setModal} obj={obj} />
//             </div>
//             <div className={`${modal == "edit" ? "w-[140%]" : ""}  fixed top-0 right-0   transition-transform duration-500 ease-in-out
//                 ${modal === "edit" ? "translate-x-0 z-[99999] " : " translate-x-[540px] z-50"}`}>
//                 <EditZonalModal setModal={setModal} obj={obj} />
//             </div>
//             {/* Zonal In-Charges Modals End  */}

//             {/* salesRepresentative modal  */}
//             <div className={`${modal == "createSr" ? "w-[140%]" : ""}  fixed top-0 right-0   transition-transform duration-500 ease-in-out
//                 ${modal === "createSr" ? "translate-x-0 z-[99999] " : " translate-x-[540px] z-50"}`}>
//                 <CreateSrModal setModal={setModal} obj={obj} />
//             </div>
//             <div className={`${modal == "editSr" ? "w-[140%]" : ""}  fixed top-0 right-0   transition-transform duration-500 ease-in-out
//                 ${modal === "editSr" ? "translate-x-0 z-[99999] " : " translate-x-[540px] z-50"}`}>
//                 <EditSrModal setModal={setModal} obj={obj} />
//             </div>
//             {/* salesRepresentative modal  */}

//             <div className='w-full '>
//                 <Tabs tabList={tabList} tabs={tabs} setTabs={setTabs} />
//                 <div className='px-12 mt-4'>
//                     {tabs == 1 &&
//                         <>
//                             <div className='flex gap-4 w-full justify-between items-center'>
//                                 <div className='flex flex-1 w-full'>
//                                     <SearchInput
//                                         placeholder="Search by Name, Id"
//                                         value={searchTerm}
//                                         onChange={handleSearchChange}
//                                         extraClass={``}
//                                     />
//                                 </div>
//                                 <Button onClick={() => setModal("create")}>+ Create Zonal In-Charges</Button>
//                             </div>
//                             <DocumentTable setModal={setModal} setObj={setObj} />
//                         </>
//                     }
//                     {tabs == 2 &&
//                         <>
//                             <div className='flex gap-4 w-full justify-between items-center'>
//                                 <div className='flex flex-1 w-full'>
//                                     <SearchInput
//                                         placeholder="Search by Name, Id"
//                                         value={searchTerm}
//                                         onChange={handleSearchChange}
//                                         extraClass={``}
//                                     />
//                                 </div>
//                                 <Button onClick={() => setModal("createSr")}>+ Create Sale Representative</Button>
//                             </div>
//                             <SalesRepTable setModal={setModal} setObj={setObj} />
//                         </>
//                     }
//                     {tabs == 3 &&
//                             <SalesExecutive />
//                     }
//                 </div>
//             </div>
//         </>
//     )
// }

// export default UserRoleManagementComponents


'use client';

import React, { useState } from 'react';
import DocumentTable from './Tables/DocumentTable';
import EditZonalModal from './Modals/EditZonalModal';
import CreateZonalModal from './Modals/CreateZonalModal';
import SalesRepTable from './Tables/SalesRepTable';
import CreateSrModal from './Modals/CreateSrModal';
import EditSrModal from './Modals/EditSrModal';
import SalesExecutive from './SalesExecutive';
import Tabs from './Tabs';
import Button from '@/components/reuseable/Button';
import SearchInput from '@/components/reuseable/SearchInput';


const UserRoleManagementComponent = () => {
  const [modal, setModal] = useState('');
  const [tabs, setTabs] = useState(1);
  const [obj, setObj] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  const tabList = [
    { id: 1, name: 'Zonal In-Charges' },
    { id: 2, name: 'Sale Representative' },
    { id: 3, name: 'Sales Executive' },
  ];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className=' min-w-full'>
      {/* Modals */}
      <div className={`fixed top-0 right-0 transition-transform duration-500 ease-in-out ${modal === 'create' ? 'translate-x-0 z-[99999] w-[140%]' : 'translate-x-[540px] z-50'}`}>
        <CreateZonalModal setModal={setModal} obj={obj} />
      </div>
      <div className={`fixed top-0 right-0 transition-transform duration-500 ease-in-out ${modal === 'edit' ? 'translate-x-0 z-[99999] w-[140%]' : 'translate-x-[540px] z-50'}`}>
        <EditZonalModal setModal={setModal} obj={obj} />
      </div>
      <div className={`fixed top-0 right-0 transition-transform duration-500 ease-in-out ${modal === 'createSr' ? 'translate-x-0 z-[99999] w-[140%]' : 'translate-x-[540px] z-50'}`}>
        <CreateSrModal setModal={setModal} obj={obj} />
      </div>
      <div className={`fixed top-0 right-0 transition-transform duration-500 ease-in-out ${modal === 'editSr' ? 'translate-x-0 z-[99999] w-[140%]' : 'translate-x-[540px] z-50'}`}>
        <EditSrModal setModal={setModal} obj={obj} />
      </div>

      <div className="w-full">
        <Tabs tabList={tabList} tabs={tabs} setTabs={setTabs}  />
        <div className="px-10 mt-4">
          {tabs === 1 && (
            <>
              <div className="flex gap-4 w-full justify-between items-center">
                <div className="flex flex-1 w-full">
                  <SearchInput
                    placeholder="Search by Name, Id"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    extraClass=""
                  />
                </div>
                <Button onClick={() => setModal('create')}>+ Create Zonal In-Charges</Button>
              </div>
              <DocumentTable setModal={setModal} setObj={setObj} />
            </>
          )}

          {tabs === 2 && (
            <>
              <div className="flex gap-4 w-full justify-between items-center">
                <div className="flex flex-1 w-full">
                  <SearchInput
                    placeholder="Search by Name, Id"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    extraClass=""
                  />
                </div>
                <Button onClick={() => setModal('createSr')}>+ Create Sale Representative</Button>
              </div>
              <SalesRepTable setModal={setModal} setObj={setObj} />
            </>
          )}

          {tabs === 3 && <SalesExecutive />}
        </div>
      </div>
    </div>
  );
};

export default UserRoleManagementComponent;
