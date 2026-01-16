'use client';
import CommonCartItems from "../../../components/CommonCartItems/page";
const SpecialPrice = () => {
  return (<>
    <section className="w-full py-4 bg-white relative">
      <h2 className="text-center text-5xl font-semibold tracking-widest mb-10">
        Special Price
      </h2>
      <div
        className="relative bg-cover bg-center text-white h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/home.jpg')",
        }}
      >

      </div>
    </section>

    <div className="max-w-6xl mx-auto px-4 py-6 text-gray-800">

      <CommonCartItems />

    </div>
  </>
  );
};

export default SpecialPrice;
