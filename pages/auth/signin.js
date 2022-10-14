import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import Header from "../../components/Header";
import facebook from "../../assets/facebook1.png";

export default function SignIn({ providers }) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <Header />
          <div className="flex flex-col items-center mt-12">
            <div className="w-48 h-48">
              <Image src={facebook} />
            </div>
            <div className="mt-8 bg-blue-500 rounded-full p-3">
              <button
                className="text-white"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
