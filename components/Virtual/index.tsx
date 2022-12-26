/* eslint-disable @next/next/no-img-element */
const Virtual = () => {
    return (
        <section className="py-16 bg-white-100">
            <h2 className="text-green-200 text-4xl text-center">
                Get Your Virtual 3D Avatar
            </h2>
            <div className="w-4/5 mx-auto flex justify-between gap-10 mt-24">
                <div className="w-1/2 flex gap-5">
                    <div className="w-4/5 p-5 border-[10px] border-green-200 mx-auto bg-orange-50">
                        <div className="w-full aspect-[1/0.8] bg-black"></div>
                    </div>
                </div>
                <div className="w-1/2">
                    <h4 className="text-green-200 text-xl font-medium mt-3">
                        Get your lifelike digital 3D avatar which can be used to
                        create following application and more.
                    </h4>
                    <ul className="mt-3 font-light text-lg">
                        <li className="list-disc ml-5 mt-3">Short VR videos</li>
                        <li className="list-disc ml-5 mt-3">
                            Educational videos
                        </li>
                        <li className="list-disc ml-5 mt-3">
                            Customize Marketing content
                        </li>
                        <li className="list-disc ml-5 mt-3">AI Chatbot</li>
                    </ul>
                    <button className="py-4 px-6 text-2xl font-extralight text-white-50 bg-green-50 flex justify-center items-center gap-5 mt-16 rounded-md">
                        Enquire Now
                        <img
                            src="/images/icons/bi_arrow-right.png"
                            alt="right-arrow"
                        />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Virtual;
