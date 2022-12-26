/* eslint-disable @next/next/no-img-element */
const ImaginationPrinted = () => {
    return (
        <section className="py-16 bg-white-50">
            <h2 className="text-green-200 text-4xl text-center">
                Get Your Imagination 3D Printed
            </h2>
            <div className="w-4/5 mx-auto flex justify-between gap-10 mt-24">
                <div className="w-1/2">
                    <h4 className="text-green-200 text-xl font-medium mt-3">
                        You can customize a minitaure as per your thinking, It
                        can be anything without limitations
                    </h4>
                    <ul className="mt-3 font-light text-lg">
                        <li className="list-disc ml-5 mt-3">Any animal</li>
                        <li className="list-disc ml-5 mt-3">
                            Any 3D Abstract art
                        </li>
                        <li className="list-disc ml-5 mt-3">
                            Any scenery in 3D on miniature base
                        </li>
                        <li className="list-disc ml-5 mt-3">
                            Any number of individual elements
                        </li>
                    </ul>
                    <button className="py-4 px-6 text-2xl font-extralight text-white-50 bg-green-50 flex justify-center items-center gap-5 mt-16 rounded-md">
                        Enquire Now
                        <img
                            src="/images/icons/bi_arrow-right.png"
                            alt="right-arrow"
                        />
                    </button>
                </div>
                <div className="w-1/2 flex gap-5">
                    <div className="w-4/5 p-5 border-[10px] border-green-200 mx-auto bg-orange-50">
                        <div className="w-full aspect-[1/0.8] bg-black"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImaginationPrinted;
