
'use client';
import React from 'react';
import Button from '@/components/reuseable/Button';
import Image from 'next/image';
import target from '../../../../../assets/SaleResimages/target.png';
import Dailysaleform from '../Form/Dailysaleform';
import { createDailysale } from '@/schema/salerepresentative';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';


const Dailysalemodal = ({ show, onClose, }) => {
  if (!show) return null;

  const {
    control,
    handleSubmit,
    register,
    trigger,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      spice: "",
      lacha: "",
      cake: "",
      semi: "",
      shop: "",
      shop: "",
      ims: "",
      image: "",

    },
    mode: "onBlur",
    resolver: yupResolver(createDailysale),
  });


  const handleBlur = async (fieldName) => {
    try {
      await trigger(fieldName);
    } catch (error) {
      console.error(error);
    }
  };

  const submit = (values) => {
    console.log(values, "values")
    toast.success(" Daily Sale Created Successfully")
    reset()
    setModal(false)
  }
   const values = watch()
  return (
    <div className='w-full h-screen bg-[#b8b8b88a] z-[999] fixed top-0 right-0 flex flex-col justify-center items-center '>
      <div className='bg-white  shadow-2xl  w-[540px] laptop:w-[70%]'>
        <div style={{ height: "calc(100vh - 100px)" }} className="relative  overflow-y-auto ">
            <div className=" sticky top-0  z-[99]">
          <h2 className="text-xl bg-[#1398E6]  text-white font-bold p-4">Enter Daily Sales</h2>
          </div>
          <div className=' p-4'>
            <div className=' flex  gap-2'>
              <Image src={target} alt='Target' width={40} height={40} />
              <p className=' text-2xl font-bold mt-1'>Focus products</p>
            </div>

            <div className="relative mt-3 mb-6 overflow-auto">
              <Dailysaleform
                control={control} register={register}
                errors={errors} handleBlur={handleBlur}
                watch={watch}
                setValue={setValue}
                values={values}
              />

            </div>
          </div>
        </div>
        <div className="flex justify-center gap-4  pt-4 mb-4 border-gray-200">
          <Button
            onClick={onClose}
            extraClass="!w-32 !h-12 !bg-white !text-black border border-gray-400"
          >
            Close
          </Button>
          <Button
            onClick={handleSubmit(submit)}
            extraClass="!w-32 !h-12"

          >
            Save & Close
          </Button>
        </div>
      </div>

    </div>
  );
};

export default Dailysalemodal;



