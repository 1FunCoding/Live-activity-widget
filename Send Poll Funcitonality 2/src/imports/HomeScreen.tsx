import svgPaths from "./svg-9032r3ko6b";
import imgImage1 from "figma:asset/c8be1a032071d8c575a41a3353e0522f877a1bfa.png";

function Div2() {
  return <div className="absolute left-[110px] rounded-[16777200px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-[40px] top-0" data-name="div" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 201, 80) 0%, rgb(0, 150, 137) 100%)" }} />;
}

function Div1() {
  return (
    <div className="absolute left-[74px] rounded-[16777200px] shadow-[0px_0px_0px_0px_#51a2ff,0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-[150px] top-[21px]" data-name="div" style={{ backgroundImage: "linear-gradient(135deg, rgb(222, 226, 234) 0%, rgb(101, 102, 113) 100%)" }}>
      <div className="absolute h-[157px] left-[-43px] top-0 w-[235px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none mix-blend-lighten object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <div className="absolute h-0 left-[31.5px] top-[118px] w-[85px]">
        <div className="absolute inset-[-5px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 5">
            <line id="Line 1" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="5" x1="2.5" x2="82.5" y1="2.5" y2="2.5" />
          </svg>
        </div>
      </div>
      <Div2 />
      <div className="absolute h-[33.414px] left-[57.42px] top-[37.66px] w-[33.821px]">
        <div className="absolute inset-[-14.96%_-14.78%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.8206 43.4135">
            <path d={svgPaths.p25be8200} id="Vector 1" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="10" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[21.69px] left-[38.76px] top-[89.27px] w-[70.054px]">
        <div className="absolute inset-[-23.05%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80.0536 31.6901">
            <path d={svgPaths.pf5a9400} id="Vector 2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="10" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function P() {
  return (
    <div className="absolute h-[24px] left-0 top-[13px] w-[260px]" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-1/2 not-italic text-[16px] text-center text-white top-0 tracking-[-0.3125px] w-[260px]">View Profile</p>
    </div>
  );
}

function Div3() {
  return (
    <div className="absolute h-[50px] left-0 top-0 w-[260px]" data-name="div">
      <P />
    </div>
  );
}

function ViewProfile() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] h-[50px] left-[19px] rounded-[16px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.2)] top-[329px] w-[260px]" data-name="view.profile">
      <Div3 />
    </div>
  );
}

function P1() {
  return (
    <div className="-translate-x-1/2 absolute h-[24px] left-1/2 top-[13px] w-[260px]" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[130px] not-italic text-[16px] text-center text-white top-0 tracking-[-0.3125px] w-[260px]">Change Status</p>
    </div>
  );
}

function Div4() {
  return (
    <div className="absolute h-[50px] left-0 top-0 w-[260px]" data-name="div">
      <P1 />
    </div>
  );
}

function ChangeStatus() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] h-[50px] left-[19px] rounded-[16px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.2)] top-[271px] w-[260px]" data-name="change.status">
      <Div4 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] border-solid h-[400px] left-[20px] overflow-clip rounded-[24px] top-[22px] w-[300px]" data-name="button">
      <Div1 />
      <ViewProfile />
      <ChangeStatus />
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[27px] left-[149.5px] not-italic text-[18px] text-[rgba(255,255,255,0.7)] text-center top-[179px] whitespace-nowrap">
        Status: Online
        <br aria-hidden="true" />
        Not in activity
      </p>
    </div>
  );
}

function P2() {
  return (
    <div className="absolute h-[30px] left-0 top-[10px] w-[260px]" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[30px] left-[130px] not-italic text-[20px] text-center text-white top-0 w-[260px]">View Calendar</p>
    </div>
  );
}

function MotionButton() {
  return (
    <div className="absolute bg-gradient-to-b from-[#e5aac3] h-[50px] left-0 rounded-[16px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.2)] to-[#9a52c7] top-0 w-[260px]" data-name="motion.button">
      <P2 />
    </div>
  );
}

function ViewCalendar() {
  return (
    <div className="absolute h-[50px] left-[19px] top-[271px] w-[260px]" data-name="view.calendar">
      <MotionButton />
    </div>
  );
}

function P3() {
  return (
    <div className="absolute h-[30px] left-0 top-[10px] w-[260px]" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[30px] left-[130px] not-italic text-[20px] text-center text-white top-0 w-[260px]">Send Poll</p>
    </div>
  );
}

function MotionButton1() {
  return (
    <div className="bg-gradient-to-b flex-[1_0_0] from-[#fa957e] h-[50px] min-h-px min-w-px relative rounded-[16px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.2)] to-[#d01566]" data-name="motion.button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <P3 />
      </div>
    </div>
  );
}

function SendPoll() {
  return (
    <div className="absolute content-stretch flex h-[50px] items-start left-[19px] top-[174px] w-[260px]" data-name="send.poll">
      <MotionButton1 />
    </div>
  );
}

function P4() {
  return (
    <div className="absolute h-[30px] left-0 top-[10px] w-[260px]" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[30px] left-[130px] not-italic text-[20px] text-center text-white top-0 w-[260px]">Start Activity</p>
    </div>
  );
}

function MotionButton2() {
  return (
    <div className="bg-gradient-to-b flex-[1_0_0] from-[#2b7fff] h-[50px] min-h-px min-w-px relative rounded-[16px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.2)] to-[#9810fa]" data-name="motion.button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <P4 />
      </div>
    </div>
  );
}

function StartActivity() {
  return (
    <div className="absolute content-stretch flex h-[50px] items-start left-[19px] top-[77px] w-[260px]" data-name="start.activity">
      <MotionButton2 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] border-solid h-[400px] left-[350px] overflow-clip rounded-[24px] top-[22px] w-[300px]" data-name="button">
      <ViewCalendar />
      <SendPoll />
      <StartActivity />
    </div>
  );
}

function P5() {
  return (
    <div className="absolute left-0 size-[70px] top-0" data-name="p">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[64px] justify-center leading-[0] left-[35px] not-italic text-[40px] text-[rgba(255,255,255,0.5)] text-center top-[32px] tracking-[0.0703px] w-[70px]">
        <p className="leading-[20px]">+</p>
      </div>
    </div>
  );
}

function Div5() {
  return <div className="absolute border-2 border-[rgba(255,255,255,0.3)] border-solid left-0 rounded-[16777200px] size-[70px] top-0" data-name="div" />;
}

function MotionButton3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] left-[179px] rounded-[16777200px] size-[70px] top-[269px]" data-name="motion.button">
      <P5 />
      <Div5 />
    </div>
  );
}

function P6() {
  return (
    <div className="absolute h-[24px] left-[20.61px] top-[23px] w-[28.773px]" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[14px] not-italic text-[18px] text-center text-white top-0 tracking-[-0.3125px] whitespace-nowrap">SM</p>
    </div>
  );
}

function MotionButton4() {
  return (
    <div className="absolute left-[25px] rounded-[16777200px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-[70px] top-0" data-name="motion.button" style={{ backgroundImage: "linear-gradient(135deg, rgb(246, 51, 154) 0%, rgb(236, 0, 63) 100%)" }}>
      <P6 />
    </div>
  );
}

function P7() {
  return (
    <div className="absolute h-[16px] left-[-0.21px] top-[5px] w-[87.57px]" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[44px] not-italic text-[20px] text-center text-white top-[-1px] whitespace-nowrap">Sarah</p>
    </div>
  );
}

function Container3() {
  return <div className="bg-[#ffc107] rounded-[16777200px] shrink-0 size-[8px]" data-name="Container" />;
}

function P8() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.5)] top-0 whitespace-nowrap">Away</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[21px] items-center left-[18.79px] top-[20px] w-[49.305px]" data-name="Container">
      <Container3 />
      <P8 />
    </div>
  );
}

function Div6() {
  return (
    <div className="absolute h-[41px] left-[16.21px] top-[75px] w-[87.57px]" data-name="div">
      <P7 />
      <Container2 />
    </div>
  );
}

function MotionDiv() {
  return (
    <div className="absolute h-[140px] left-[24px] top-[269px] w-[120px]" data-name="motion.div">
      <MotionButton4 />
      <Div6 />
    </div>
  );
}

function P9() {
  return (
    <div className="absolute h-[24px] left-[20.61px] top-[23px] w-[28.773px]" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[14px] not-italic text-[18px] text-center text-white top-0 tracking-[-0.3125px] whitespace-nowrap">MC</p>
    </div>
  );
}

function MotionButton5() {
  return (
    <div className="absolute left-[25px] rounded-[16777200px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-[70px] top-0" data-name="motion.button" style={{ backgroundImage: "linear-gradient(135deg, rgb(138, 43, 226) 0%, rgb(75, 0, 130) 100%)" }}>
      <P9 />
    </div>
  );
}

function P10() {
  return (
    <div className="absolute h-[16px] left-[-0.21px] top-[5px] w-[87.57px]" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[44.5px] not-italic text-[20px] text-center text-white top-[-1px] whitespace-nowrap">Morgan</p>
    </div>
  );
}

function Container5() {
  return <div className="bg-[#ffc107] rounded-[16777200px] shrink-0 size-[8px]" data-name="Container" />;
}

function P11() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.5)] top-0 whitespace-nowrap">Away</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[21px] items-center left-[19.79px] top-[24px] w-[49.305px]" data-name="Container">
      <Container5 />
      <P11 />
    </div>
  );
}

function Div7() {
  return (
    <div className="absolute h-[41px] left-[16.21px] top-[75px] w-[87.57px]" data-name="div">
      <P10 />
      <Container4 />
    </div>
  );
}

function MotionDiv1() {
  return (
    <div className="absolute h-[140px] left-[24px] top-[144px] w-[120px]" data-name="motion.div">
      <MotionButton5 />
      <Div7 />
    </div>
  );
}

function P12() {
  return (
    <div className="absolute h-[24px] left-[23.61px] top-[23px] w-[22.773px]" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[11.5px] not-italic text-[18px] text-center text-white top-0 tracking-[-0.3125px] whitespace-nowrap">AJ</p>
    </div>
  );
}

function MotionButton6() {
  return (
    <div className="h-[70px] relative rounded-[16777200px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="motion.button" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 184, 219) 0%, rgb(21, 93, 252) 100%)" }}>
      <P12 />
    </div>
  );
}

function P13() {
  return (
    <div className="absolute h-[16px] left-0 top-[5px] w-[71.477px]" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[36px] not-italic text-[20px] text-center text-white top-[-1px] whitespace-nowrap">Alex</p>
    </div>
  );
}

function Container7() {
  return <div className="bg-[#da4147] rounded-[16777200px] shrink-0 size-[8px]" data-name="Container" />;
}

function P14() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.5)] top-0 whitespace-nowrap">Silent</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[21px] items-center left-[10px] top-[21px] w-[50px]" data-name="Container">
      <Container7 />
      <P14 />
    </div>
  );
}

function Div8() {
  return (
    <div className="h-[41px] relative shrink-0 w-full" data-name="div">
      <P13 />
      <Container6 />
    </div>
  );
}

function MotionDiv2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[5px] h-[140px] items-start left-[154px] px-[25px] top-[144px] w-[120px]" data-name="motion.div">
      <MotionButton6 />
      <Div8 />
    </div>
  );
}

function P15() {
  return (
    <div className="absolute h-[24px] left-[20.65px] top-[23px] w-[28.695px]" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[14px] not-italic text-[18px] text-center text-white top-0 tracking-[-0.3125px] whitespace-nowrap">TW</p>
    </div>
  );
}

function MotionButton7() {
  return (
    <div className="absolute left-[25px] rounded-[16777200px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-[70px] top-0" data-name="motion.button" style={{ backgroundImage: "linear-gradient(135deg, rgb(254, 154, 0) 0%, rgb(245, 73, 0) 100%)" }}>
      <P15 />
    </div>
  );
}

function P16() {
  return (
    <div className="absolute h-[16px] left-[0.14px] top-[5px] w-[70.289px]" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[35.5px] not-italic text-[20px] text-center text-white top-[-1px] whitespace-nowrap">Taylor</p>
    </div>
  );
}

function Container9() {
  return <div className="bg-[#05df72] rounded-[16777200px] shrink-0 size-[8px]" data-name="Container" />;
}

function P17() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.5)] top-0 whitespace-nowrap">Online</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[21px] items-center left-[8.14px] top-[21px] w-[55.844px]" data-name="Container">
      <Container9 />
      <P17 />
    </div>
  );
}

function Div9() {
  return (
    <div className="absolute h-[41px] left-[24.86px] top-[75px] w-[70.289px]" data-name="div">
      <P16 />
      <Container8 />
    </div>
  );
}

function MotionDiv3() {
  return (
    <div className="absolute h-[140px] left-[154px] top-[19px] w-[120px]" data-name="motion.div">
      <MotionButton7 />
      <Div9 />
    </div>
  );
}

function P18() {
  return (
    <div className="absolute h-[24px] left-[23.85px] top-[23px] w-[22.297px]" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[11.5px] not-italic text-[18px] text-center text-white top-0 tracking-[-0.3125px] whitespace-nowrap">JD</p>
    </div>
  );
}

function MotionButton8() {
  return (
    <div className="absolute left-[25px] rounded-[16777200px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-[70px] top-0" data-name="motion.button" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 201, 80) 0%, rgb(0, 153, 102) 100%)" }}>
      <P18 />
    </div>
  );
}

function P19() {
  return (
    <div className="absolute h-[16px] left-[-0.27px] top-[5px] w-[79.461px]" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[40.5px] not-italic text-[20px] text-center text-white top-[-1px] whitespace-nowrap">Jordan</p>
    </div>
  );
}

function Container11() {
  return <div className="bg-[#05df72] rounded-[16777200px] shrink-0 size-[8px]" data-name="Container" />;
}

function P20() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.5)] top-0 whitespace-nowrap">Online</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[21px] items-center left-[11.73px] top-[20px] w-[55.844px]" data-name="Container">
      <Container11 />
      <P20 />
    </div>
  );
}

function Div10() {
  return (
    <div className="absolute h-[41px] left-[20.27px] top-[75px] w-[79.461px]" data-name="div">
      <P19 />
      <Container10 />
    </div>
  );
}

function MotionDiv4() {
  return (
    <div className="absolute h-[140px] left-[24px] top-[19px] w-[120px]" data-name="motion.div">
      <MotionButton8 />
      <Div10 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] border-solid h-[400px] left-[680px] overflow-clip rounded-[24px] top-[22px] w-[300px]" data-name="button">
      <MotionButton3 />
      <MotionDiv />
      <MotionDiv1 />
      <MotionDiv2 />
      <MotionDiv3 />
      <MotionDiv4 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[444px] left-0 top-0 w-[1000px]" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[444px] left-0 top-[73px] w-[1000px]" data-name="Container">
      <Container1 />
    </div>
  );
}

function H() {
  return (
    <div className="absolute content-stretch flex h-[58px] items-center justify-center left-[20px] top-[29px] w-[300px]" data-name="h1">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[36px] not-italic relative shrink-0 text-[32px] text-center text-white tracking-[-0.3545px] w-[300px]">Hi Bob!</p>
    </div>
  );
}

function Div() {
  return (
    <div className="absolute h-[517px] left-0 top-0 w-[1000px]" data-name="div" style={{ backgroundImage: "linear-gradient(152.661deg, rgb(15, 23, 43) 0%, rgb(29, 41, 61) 50%, rgb(15, 23, 43) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Container />
      <H />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[36px] left-[500px] not-italic text-[32px] text-center text-white top-[40px] tracking-[-0.3545px] w-[300px]">Let’s Talk!</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[36px] left-[830px] not-italic text-[32px] text-center text-white top-[40px] tracking-[-0.3545px] w-[300px]">Connect!</p>
    </div>
  );
}

export default function HomeScreen() {
  return (
    <div className="bg-white relative size-full" data-name="Home Screen">
      <Div />
    </div>
  );
}