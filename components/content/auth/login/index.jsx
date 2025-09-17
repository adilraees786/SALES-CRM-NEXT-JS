import LoginForm from "./LoginForm"
import LoginText from "./LoginText"

const LoginComponent = () =>
{
    return (

        <div className="w-full authBackground">
            <div style={{ height: "calc(100vh - 50px)" }} className='w-full flex flex-col justify-center items-center overflow-y-auto'>
                <div className=' w-[380px]'>
                    <LoginText />
                    <LoginForm />
                </div>
            </div>
        </div>


    )
}

export default LoginComponent