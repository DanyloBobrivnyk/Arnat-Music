import Container from "@/components/shared/container/Container";
import React from "react";

const AboutPage = () => {
    return (
        <Container>
            <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto mt-12 max-w-2xl sm:mt-10 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900">Get in touch</h3>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                            Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis
                            repellendus etur quidem assumenda.
                        </p>
                    </div>
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="rounded-2xl bg-gray-50 lg:flex lg:flex-col lg:justify-center lg:py-16 py-10 px-12 text-left">
                                <p className="text-base font-semibold text-black-600 mb-4">Collaboration</p>
                                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">blabla@gmail.com</h4>
                                <p className="text-base text-gray-600">+22 222 222 222</p>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    );
}

export default AboutPage;
