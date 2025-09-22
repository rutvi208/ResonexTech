import Image from 'next/image';
import Tableau from './../../../public/images/Tableau.png';
import Informatica from './../../../public/images/Informatica.png';
import PowerBI from './../../../public/images/PowerBI.png';
import Aws from './../../../public/images/Aws.png';
import Azure from './../../../public/images/Azure.png';
import GoogleCloud from './../../../public/images/GoogleCloud.png';
import Salesforce from './../../../public/images/Salesforce.png';
import Databricks from './../../../public/images/Databricks.png';
import Snowflakes from './../../../public/images/Snowflakes.png';
import Quickbase from './../../../public/images/Quickbase.png';

const Expertise = () => {
    return (
        <>
            <section className="px-6 lg:px-12 py-12 lg:pb-24 md:mt-12 xl:my-20">
                <div className="max-w-7xl mx-auto items-center justify-center place-items-center ">
                    {/* heading */}
                    <div className='text-center my-20 sm:mb-24 place-items-center'>
                        <h2 className="py-2 text-4xl lg:text-5xl xl:text-6xl font-bold xl:leading-16 tracking-tight bg-gradient-to-br sm:bg-gradient-to-r from-[#303030] via-[#32006C] via-[50%] to-[#4D4D4D] bg-clip-text text-transparent">
                            Ready to future-proof your technology ?
                        </h2>
                        <p className="mt-4 text-[var(--foreground)] medium-text mx-auto text-lg md:text-xl">
                            Discuss your stack with our certified solution architects today.
                        </p>
                    </div>

                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
                        {/* <!-- Logos Grid --> */}
                        <div>
                            {/* <!-- Row 1 --> */}
                            <div className="grid grid-cols-3 gap-2 mx-4 lg:mx-10 2xl:mx-12">
                                <div className="bg-white border-[#EDEDED] border rounded-xl flex flex-col items-center justify-center p-4">
                                <Image src={Tableau} alt="Tableau" className="mb-3" />
                                <p className="text-base text-[var(--foreground)]">Tableau</p>
                                </div>
                                <div className="bg-white border-[#EDEDED] border rounded-xl flex flex-col items-center justify-center p-4">
                                <Image src={Informatica} alt="Informatica" className="mb-3" />
                                <p className="text-base text-[var(--foreground)]">Informatica</p>
                                </div>
                                <div className="bg-white border-[#EDEDED] border rounded-xl flex flex-col items-center justify-center p-4">
                                <Image src={PowerBI} alt="Power BI" className="mb-3" />
                                <p className="text-base text-[var(--foreground)]">Power BI</p>
                                </div>
                            </div>
                            
                            {/* <!-- Row 2 --> */}
                            <div className="grid grid-cols-4 gap-2 my-4">
                                <div className="bg-white border-[#EDEDED] border rounded-xl flex flex-col items-center justify-center p-4">
                                <Image src={Aws} alt="AWS" className="mb-3" />
                                <p className="text-xs text-gray-600">AWS</p>
                                </div>
                                <div className="bg-white border-[#EDEDED] border rounded-xl flex flex-col items-center justify-center p-4">
                                <Image src={Salesforce} alt="Salesforce" className="mb-3" />
                                <p className="text-xs text-gray-600">Salesforce</p>
                                </div>
                                <div className="bg-white border-[#EDEDED] border rounded-xl flex flex-col items-center justify-center p-4">
                                <Image src={Azure} alt="Microsoft Azure" className="mb-3" />
                                <p className="text-xs text-gray-600">Microsoft Azure</p>
                                </div>
                                <div className="bg-white border-[#EDEDED] border rounded-xl flex flex-col items-center justify-center p-4">
                                <Image src={GoogleCloud} alt="Google Cloud" className="mb-3" />
                                <p className="text-xs text-gray-600">Google Cloud</p>
                                </div>
                            </div>

                            {/* <!-- Row 3 --> */}
                            <div className="grid grid-cols-3 gap-2 mx-4 lg:mx-10 2xl:mx-12">
                                <div className="bg-white border-[#EDEDED] border rounded-xl flex flex-col items-center justify-center p-4">
                                <Image src={Quickbase} alt="Quickbase" className="mb-3" />
                                <p className="text-xs text-gray-600">Quickbase</p>
                                </div>
                                <div className="bg-white border-[#EDEDED] border rounded-xl flex flex-col items-center justify-center p-4">
                                <Image src={Databricks} alt="Databricks" className="mb-3" />
                                <p className="text-xs text-gray-600">Databricks</p>
                                </div>
                                <div className="bg-white border-[#EDEDED] border rounded-xl flex flex-col items-center justify-center p-4">
                                <Image src={Snowflakes} alt="Snowflakes" className="mb-3" />
                                <p className="text-xs text-gray-600">Snowflakes</p>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Right: Text Content --> */}
                        <div>
                            <h3 className="text-3xl lg:text-[2.50rem] medium-text tracking-tight leading-snug lg:w-8/12 bg-gradient-to-br sm:bg-gradient-to-r from-[#303030] via-[#32006C] via-[50%] to-[#4D4D4D] bg-clip-text text-transparent">
                                Certified to Work With Your Stack
                            </h3>
                            <p className="bold-heading text-[var(--foreground)] text-lg lg:text-xl lg:w-96 mt-3 mb-8">
                                Maximize Reliability with Certified, Industry-Leading Expertise
                            </p>
                            <p className="text-[var(--foreground)] mediun-text text-lg lg:text-xl">
                                Empower your business with seamless integration and expert support across the world`s leading
                                data, analytics, and cloud platforms. Our team boasts top-tier certifications from major
                                technology partners—ensuring your solutions aren`t just compatible, but fully optimized for
                                speed, security, and scale.
                            </p>
                        </div>
                    </div>

                    {/* grid data */}
                    <div>
                        <div className="max-w-7xl mt-12 lg:mt-24 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* <!-- Card 1 --> */}
                            <div className="bg-[#F8F8F8] border border-[#EDEDED] rounded-2xl p-7 shadow-sm">
                            <h3 className="semibold-text text-[var(--foreground)] text-lg lg:text-xl mb-2">
                                Broad Multi-Cloud Mastery:
                            </h3>
                            <p className="text-base lg:text-base medium-text text-[var(--foreground)]">
                                Certified experts in AWS, Microsoft Azure, and Google Cloud to support your evolving digital transformation.
                            </p>
                            </div>

                            {/* <!-- Card 2 --> */}
                            <div className="bg-[#F8F8F8] border border-[#EDEDED] rounded-2xl p-7 shadow-sm">
                            <h3 className="semibold-text text-[var(--foreground)] text-lg lg:text-xl mb-2">
                                Data &amp; BI Excellence:
                            </h3>
                            <p className="text-base lg:text-base medium-text text-[var(--foreground)]">
                                Advanced skills in Tableau, Informatica, Power BI, and Databricks drive clear, actionable intelligence from all your data.
                            </p>
                            </div>

                            {/* <!-- Card 3 --> */}
                            <div className="bg-[#F8F8F8] border border-[#EDEDED] rounded-2xl p-7 shadow-sm">
                            <h3 className="semibold-text text-[var(--foreground)] text-lg lg:text-xl mb-2">
                                Operational Agility:
                            </h3>
                            <p className="text-base lg:text-base medium-text text-[var(--foreground)]">
                                Optimization and automation experience with Salesforce, Quickbase, and other leading enterprise tools streamlines your business processes.
                            </p>
                            </div>

                            {/* <!-- Card 4 --> */}
                            <div className="bg-[#F8F8F8] border border-[#EDEDED] rounded-2xl p-7 shadow-sm">
                            <h3 className="semibold-text text-[var(--foreground)] text-lg lg:text-xl mb-2">
                                Next-Gen Data Platforms:
                            </h3>
                            <p className="text-base lg:text-base medium-text text-[var(--foreground)]">
                                Specialized in Snowflake and modern data stacks for unmatched speed, scale, and trust.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Expertise;