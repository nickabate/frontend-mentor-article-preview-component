"use client";

import constants from "@/constants";
import Image from "next/image";
import ShareSVG from "@/public/icon-share.svg";

import { useState } from "react";

export default function Home() {
	const [activeState, setActiveState] = useState<boolean>(false);

	return (
		<main className="min-h-screen bg-primary-40 flex justify-center items-center">
			<section className="flex flex-col max-w-[330px] bg-white rounded-xl shadow-md lg:flex-row lg:max-w-[820px]">
				<div>
					<Image
						src="/drawers.jpg"
						alt="drawers"
						width={500}
						height={400}
						className="rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none"
					/>
				</div>
				<div className=" flex flex-col gap-4 lg:max-w-[400px]">
					<div className="flex flex-col gap-4 px-8 pt-8">
						<h2 className="text-lg text-primary-10 font-bold">
							{constants.ARTICLE.heading}
						</h2>
						<p className="text-md text-primary-20">
							{constants.ARTICLE.preview}
						</p>
					</div>
					<div className="flex flex-row items-center justify-between relative px-8 py-4 lg:pb-8 lg:pt-4">
						{activeState && (
							<>
								<div className="absolute bottom-0 left-0 right-0 bg-primary-10 flex flex-row justify-between rounded-b-xl px-8 py-4 h-[80px] lg:-right-20 lg:-top-16 lg:bottom-24 lg:left-auto lg:h-[60px] lg:py-2 lg:rounded-xl">
									<div className="flex flex-row items-center gap-2 lg:gap-4">
										<span className="text-primary-30 tracking-[0.5rem]">
											SHARE
										</span>
										<div className="flex flex-row gap-4">
											<Image
												src="/icon-facebook.svg"
												alt="facebook"
												width={20}
												height={20}
												className="hover:cursor-pointer"
											/>
											<Image
												src="/icon-twitter.svg"
												alt="twitter"
												width={20}
												height={20}
												className="hover:cursor-pointer"
											/>
											<Image
												src="/icon-pinterest.svg"
												alt="pinterest"
												width={20}
												height={20}
												className="hover:cursor-pointer"
											/>
										</div>
									</div>
									<div className="flex justify-center items-center lg:hidden">
										<div className="bg-primary-20 rounded-full flex justify-center items-center w-9 h-9">
											<Image
												src="/icon-share.svg"
												alt="share"
												width={20}
												height={20}
												className="hover:cursor-pointer"
												onClick={() => setActiveState(!activeState)}
											/>
										</div>
									</div>
								</div>
								<div className="absolute rotate-45 lg:-top-3 lg:right-10 bg-primary-10 h-4 w-4" />
							</>
						)}
						<div className="flex flex-row gap-4">
							<div>
								<Image
									src="/avatar-michelle.jpg"
									alt="avatar"
									width={48}
									height={48}
									className="rounded-full"
								/>
							</div>
							<div>
								<h3 className="text-primary-10 font-bold">
									{constants.ARTICLE.user}
								</h3>
								<h4 className="text-primary-30">{constants.ARTICLE.date}</h4>
							</div>
						</div>

						<div className="bg-primary-40 rounded-full flex justify-center items-center w-9 h-9">
							<Image
								src="/icon-share.svg"
								alt="share"
								width={20}
								height={20}
								className="hover:cursor-pointer"
								onClick={() => setActiveState(!activeState)}
							/>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
