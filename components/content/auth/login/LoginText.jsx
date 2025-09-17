import Heading from "@/components/reuseable/Heading"
import Paragraph from "@/components/reuseable/Paragraph"
import crmlogo from '../../../../assets/Auth/crmlogo.png'
import Image from "next/image"

const LoginText = () =>
{
    return (
        <div className='flex flex-col items-center'>
            <Image src={crmlogo} alt="logo" className='w-[150px]  my-6' />
            <Heading  extraClassName={"!text-2xl !mt-2 !text-center"}>Enbling sales  excellence with Sales CRM </Heading>
            <Paragraph extraClassName={'!text-2xl !text-center !font-semiblod !mt-2'}>Please enter your employee Id and password  to log in <span className=" text-[#1689FE]">(SR, ZI, SE)</span>
            </Paragraph>
    
        </div>
    )
}

export default LoginText