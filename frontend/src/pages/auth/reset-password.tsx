import Link from 'next/link';
import Image from "next/image";

function ResetPassword() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Site header */}
      <header className="absolute w-full z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Site branding */}
            <div className="shrink-0 mr-4">
              {/* Logo */}
              <Link className="block flex" href="/" aria-label="Logo">
                <Image src="/Logo.svg" alt="Logo" width={32} height={32} />
                <Image priority className='ml-5' src="/LogoName_LightGray.svg" alt="LogoName" height={32} width={120}/>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="relative grow flex">
        {/* Content */}
        <div className="w-full bg-gray-900">
          <div className="h-full flex flex-col justify-center before:min-h-[4rem] md:before:min-h-[5rem] before:flex-1 after:flex-1">
            <div className="px-4 sm:px-6">
              <div className="w-full max-w-sm mx-auto">
                <div className="py-16 md:py-20" data-aos="zoom-out" data-aos-delay="100">
                  <div className="mb-8">
                    <h1 className="h2 font-uncut-sans mb-4">Reset password</h1>
                    <p className="text-gray-400">Enter your email address. If an account exists, you’ll receive an email with a password reset link soon.</p>
                  </div>
                  {/* Form */}
                  <form>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm text-gray-400 font-medium mb-1" htmlFor="email">Email</label>
                        <input id="email" className="form-input py-2 w-full" type="email" required />
                      </div>
                    </div>
                    <div className="mt-6">
                      <button className="btn-sm text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 w-full shadow-lg group">
                        Reset Password <span className="tracking-normal text-blue-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="hidden lg:block shrink-0 w-1/3 overflow-hidden before:bg-gray-800 before:absolute before:inset-0 before:-z-10">
          <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
            <Image src="/hero-illustration.svg" className="max-w-none" width="2143" height="737" alt="Hero Illustration" />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
            <Image src="/auth-illustration.svg" className="max-w-none" width="1440" height="880" alt="Auth Illustration" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default ResetPassword;