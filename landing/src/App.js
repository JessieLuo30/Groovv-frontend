// import logo from './logo.svg';
import phone from './img/iphone.svg';
import iconsUpper from './img/iconsUpper.svg';
import logo from './img/logo.svg';
import logoGray from './img/logoGray.svg';
import iconsLower from './img/iconsLower.svg';
import calculator from './img/calculator.svg';
import bg from './img/bg.svg';
import appstore from './img/appstore.svg';
import googlePlay from './img/googlePlay.svg';
import './App.css';

import cam from './img/contact/cam.svg';
import fb from './img/contact/fb.svg';
import ins from './img/contact/ins.svg';
import video from './img/contact/video.svg';

import step1 from './img/step1.svg';
import step2 from './img/step2.svg';
import step3 from './img/step3.svg';
import gigworker from './img/gigworker.svg';

import bigG from './img/bigG.svg';
import pp1 from './img/pp1.svg';
import pp2 from './img/pp2.svg';

function App() {
	return (
		<div className="flex flex-col relative">
			<div className="z-30 bg-[#5CB2B8] h-[80px] flex flex-row text-white gap-16 items-center justify-center font-semibold font-[18px] fixed w-full">
				<div className="w-[6%]">
					<img src={logoGray} className="scale-[80%]" />
				</div>
				<div className="w-[6%] ">Why groovv</div>
				<div className="w-[40%] ">About us</div>
				<div className="w-[170px] border-2 text-center py-1 h-[40px] rounded-[10px]">Sign up</div>
				<div className="w-[170px] border-2 text-center py-1 h-[40px] rounded-[10px]">Login</div>
			</div>

			<div className="bg-[url('./img/bg.svg')] mt-[80px] bg-no-repeat bg-cover h-[580px] flex flex-row text-[#222A26] text-[56px] font-bold px-40 items-center justify-center">
				<div className="w-[60%] mt-[-50px]">
					<div className="h-[65px]">What does your</div>
					<div className="h-[65px]">retirement</div>
					<div className="h-[100px]">look like</div>
					<div className="text-[18px] font-semibold">
						More than 57 million people and growing <br /> identify as independent workers; <br />however,
						fewer than 5% have retirement savings.
					</div>
				</div>
				<div className="w-[40%] items-center">
					<img src={calculator} className="scale-[90%]" />
				</div>
			</div>

			<div className="bg-[#BBC06B] flex flex-row bg-opacity-70 h-[400px] items-center justify-center px-2 text-white">
				<div className="w-[52%] flex flex-col gap-3 px-20">
					<div className="text-[32px] font-black text-left">Retire by 35,</div>
					<div className="h-[90px] text-[32px] font-black text-left">
						Start tracking your contribution goals
					</div>
					<div className="bg-[#5FB4B9] h-[75px] w-[285px] py-4 rounded-[30px] text-center font-semibold text-[24px]">
						Build your Plan
					</div>
				</div>
				<div className="w-[40%] mr-24 mb-8">
					<img src={phone} class="scale-[130%]" />
				</div>
			</div>

			<div className="h-[40px]" />

			<div className="bg-[#5EB5B9] gap-8 py-16 bg-opacity-50 flex flex-col items-center justify-center ">
				<div className="h-[38%]">
					<img src={iconsUpper} />
				</div>
				<div className="h-[35%] font-bold text-[32px] text-white text-center flex flex-col gap-1">
					<div>Join more than 57 Million independent workers.</div>
					<div>Together creating wealth.</div>
				</div>
				<div className="h-[35%]">
					<img src={iconsLower} />
				</div>
			</div>

			<div className="bg-[url('./img/bg2.svg')] bg-right bg-no-repeat bg-fill h-[750px] flex flex-row  w-full text-[#2C3534] py-24">
				<div className="w-[50%] ml-[-80px] mt-[-150px] ">
					<img src={gigworker} class="scale-[70%]" />
				</div>
				<div className="flex flex-col w-[40%] text-[#5EB5B9] mt-4 text-[40px] font-semibold gap-6">
					<div>Retirement is that simple</div>
					<div className="flex flex-row ">
						<div className="w-[10%] pt-3">1</div>
						<div className="w-[450px] bg-white h-[90px] items-left px-6 py-3 flex flex-row border-2 rounded-[25px]">
							<div>
								<img src={step1} class="scale-[80%]" />
							</div>
							<div className="text-black text-[22px] font-medium py-3 px-4">Create an account</div>
						</div>
					</div>
					<div className="flex flex-row">
						<div className="w-[10%] pt-3">2</div>
						<div className="w-[450px] bg-white h-[90px] items-left px-6 py-2 flex flex-row border-2 rounded-[25px]">
							<img src={step2} class="scale-[80%]" />
							<div className="text-black text-[22px] font-medium py-4 px-4">Add funds</div>
						</div>
					</div>
					<div className="flex flex-row ">
						<div className="w-[10%] pt-3">3</div>
						<div className="w-[450px] bg-white h-[90px] items-left px-6 py-1 flex flex-row border-2 rounded-[25px]">
							<img src={step3} class="scale-[80%] ml-[-5px]" />

							<div className="text-black text-[22px] py-1 font-medium px-4">
								Grab your favorite beverage and Groovv
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* testimonials */}
			<div className="h-[650px] flex flex-col mt-[-60px] w-full text-[#2C3534] px-32">
				<div className="text-center h-[20%]">
					<div className="font-bold text-[44px]">Testimonials</div>
					<div className="font-semibold text-[24px] text-[#5EB5B9] ">
						We are receiving the positive testimonals from prospective users
					</div>
				</div>
				<div className="flex flex-row h-[34%] px-16 leading-9">
					<div className="text-left flex flex-col text-[20px] w-[80%]">
						<div className="text-[#BFBFBF] text-[64px] h-[60px]">"</div>
						<div>
							I am just explaining Groovv to my coworder. Before I even finished explaining the idea, she
							said '<b><em>wow, that's exactly what my son needs</em></b>
							. He has about $100K saved up but talks about how he doesn't know how to invest it.'
						</div>
						<div className="text-[#BFBFBF] text-[64px] h-[60px] text-right">"</div>
					</div>
					<img src={pp1} class="w-max pl-20" />
				</div>
				<div className="flex flex-row font-large h-[32%] leading-9">
					<img src={pp2} class="pr-20 pl-12" />
					<div className="text-left flex flex-col text-[20px] w-[70%]">
						<div className="text-[#BFBFBF] text-[64px] h-[60px]">"</div>
						<div>
							I looked at Groovv and <b><em>it's a great idea</em></b>
							. In fact, I just had a conversation with some one about investing in crpto today.
							Increasing one's financial literacy takes time and effort. The average person lacks the
							tools to make sound longptern financial decisions.
						</div>
						<div className="text-[#BFBFBF] text-[64px] h-[60px] text-right">"</div>
					</div>
				</div>
			</div>

			{/* footer */}
			<div className="h-[400px] flex flex-col bg-[#2C3534] w-full ">
				<div className="flex flex-row items-center justify-center h-[60%] py-12 px-20">
					<div className="flex flex-col w-[50%]">
						<div>
							<img src={googlePlay} class="scale-[70%]" />
						</div>
						<div>
							<img src={appstore} class="scale-[70%]" />
						</div>
					</div>
					<div className="flex flex-col text-white gap-4 w-[30%]">
						<div className="font-extrabold text-[26px]">Legal</div>
						<div className="font-semibold text-[18px]">Privacy Policy</div>
						<div className="font-semibold text-[18px]">Terms of service</div>
					</div>
					<div className="flex flex-col text-white gap-4 w-[20%]">
						<div className="font-extrabold text-[26px]">Contact</div>
						<div className="font-semibold text-[18px]">support@groovv.io</div>
						<div className="font-semibold text-[18px]">+23481234567890</div>
					</div>
				</div>
				<div className="bg-[#EDEDED] h-[2px] mx-24" />
				<div className="flex flex-row items-center justify-center h-[30%] py-12 px-20">
					<div className="w-[40%] gap-2">
						<img src={logoGray} className="scale-[90%]" />
					</div>
					<div className="text-[#666C6C] w-[40%] font-semibold text-[18px]">ⓒ 2022 groovv.io</div>
					<div className="flex flex-row w-[20%] gap-2">
						<img src={cam} class="scale-[90%]" />
						<img src={fb} class="scale-[90%]" />
						<img src={ins} class="scale-[90%]" />
						<img src={video} class="scale-[90%]" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
