
'use client'

import AuthInput from "@/components/reuseable/AuthInput";
import Button from "@/components/reuseable/Button";
import { useForm } from "react-hook-form";
import employeeid from '../../../../assets/Auth/employeeid.png';
import pass from '../../../../assets/Auth/pass.png';
import Cookies from 'js-cookie';
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Paragraph from "@/components/reuseable/Paragraph";
import { loginSchema } from "@/schema/Auth";
import { yupResolver } from "@hookform/resolvers/yup";

const LoginForm = () => {
    const router = useRouter();

    const {
        control,
        handleSubmit,
        register,
        trigger,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        mode: "onBlur",
        resolver: yupResolver(loginSchema),
    });

    const handleBlur = async (fieldName) => {
        try {
            await trigger(fieldName);
        } catch (error) {
            console.error(error);
        }
    };

    const onSubmit = async (value) => {
        const { email, password } = value;
        try {
            let role = null;
            // determine role from the static list
            if (email === 'superadmin@gmail.com') {
                role = 'superadmin';
            } else if (email === 'salesrepresentative@gmail.com') {
                role = 'sale-representative';
            } else if (email === 'saleexecutive@gmail.com') {
                role = 'sale-executive';
            } else {
                toast.error('Invalid email');
                return;
            }

            Cookies.set('role', role, { expires: 7 });
            // redirect to the proper dashboard
            if (role === 'superadmin') {
                router.push('/superadmin/dashboard');
            } else if (role === 'sale-representative') {
                router.push('/sale-representative/dashboard');
            } else if (role === 'sale-executive') {
                router.push('/sale-executive/dashboard');
            }
        } catch (error) {
            console.error(error);
            toast.error('Some error occurred');
        }
    };

    return (
        <div className='mt-2 p-4'>
            <AuthInput
                imgExtraClass={"!w-[20px] !mb-2 "}
                Icon={employeeid}
                control={control}
                register={register}
                placeholder="Email"
                type="email"
                name="email"
                errors={errors}
                handleBlur={handleBlur}
            />

            <AuthInput
                imgExtraClass={"!w-[14px] "}
                Icon={pass}
                eyeIconExtraClass={"!text-[#A8A8A8]"}
                control={control}
                register={register}
                placeholder="Password"
                type="password"
                name="password"
                errors={errors}
                handleBlur={handleBlur}
            />

            {/* <div className='flex items-center gap-2'>
                <input type="checkbox" className='h-[16px] w-[16px]' />
                <Paragraph>Remember me</Paragraph>
            </div> */}

            <Button
                isLoading={isSubmitting}
                onClick={handleSubmit(onSubmit)}
                extraClass="mt-5 w-full"
            >
                Login
            </Button>

        </div>
    );
};

export default LoginForm;
