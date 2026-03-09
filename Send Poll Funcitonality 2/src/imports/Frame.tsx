function AWireframeBox() {
  return (
    <div className="bg-[#1e293b] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[12px]" data-name="a.wireframe-box">
      <div aria-hidden="true" className="absolute border-2 border-[#475569] border-dashed inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[2px] relative size-full">
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[17.4px] text-center whitespace-nowrap">
            <p className="leading-[normal]">+ Tap to Select Image</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="h-full relative shrink-0 w-[282.02px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center pr-[20px] relative size-full">
        <AWireframeBox />
      </div>
    </div>
  );
}

function H() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e2e8f0] text-[19.2px] w-full">
        <p className="leading-[normal]">Options</p>
      </div>
    </div>
  );
}

function H2Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16.6px] relative shrink-0 w-full" data-name="h2:margin">
      <H />
    </div>
  );
}

function Li() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="li">
      <div className="-translate-y-1/2 absolute flex flex-col h-[24px] justify-center left-0 text-[18px] top-[12px] w-[7.7px]">
        <ul className="ml-[-1.5em]">
          <li className="list-disc ms-[27px] whitespace-pre-wrap">
            <span className="leading-[normal]">{` `}</span>
          </li>
        </ul>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[24px] justify-center left-0 text-[17px] top-[12px] w-[167.8px]">
        <p className="leading-[normal]">Option 1 Placeholder</p>
      </div>
    </div>
  );
}

function Li1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="li">
      <div className="-translate-y-1/2 absolute flex flex-col h-[24px] justify-center left-0 text-[18px] top-[12px] w-[7.7px]">
        <ul className="ml-[-1.5em]">
          <li className="list-disc ms-[27px] whitespace-pre-wrap">
            <span className="leading-[normal]">{` `}</span>
          </li>
        </ul>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[24px] justify-center left-0 text-[16.9px] top-[12px] w-[167.8px]">
        <p className="leading-[normal]">Option 2 Placeholder</p>
      </div>
    </div>
  );
}

function Li2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="li">
      <div className="-translate-y-1/2 absolute flex flex-col h-[24px] justify-center left-0 text-[18px] top-[12px] w-[7.7px]">
        <ul className="ml-[-1.5em]">
          <li className="list-disc ms-[27px] whitespace-pre-wrap">
            <span className="leading-[normal]">{` `}</span>
          </li>
        </ul>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[24px] justify-center left-0 text-[16.9px] top-[12px] w-[167.8px]">
        <p className="leading-[normal]">Option 3 Placeholder</p>
      </div>
    </div>
  );
}

function Ul() {
  return (
    <div className="relative shrink-0 w-full" data-name="ul">
      <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[15px] items-start leading-[0] not-italic pb-[15px] pl-[20px] relative text-[#cbd5e1] w-full">
        <Li />
        <Li1 />
        <Li2 />
      </div>
    </div>
  );
}

function UlMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[20px] pt-[18px] relative shrink-0 w-full" data-name="ul:margin">
      <Ul />
    </div>
  );
}

function ButtonBtn() {
  return (
    <div className="bg-[#ec4899] content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[48px]" data-name="button.btn">
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[24px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] size-[48px] top-0" data-name="button.btn:shadow" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-center text-white whitespace-nowrap">
        <p className="leading-[normal]">+</p>
      </div>
    </div>
  );
}

function Div1() {
  return (
    <div className="h-full relative shrink-0 w-[311.98px]" data-name="div">
      <div aria-hidden="true" className="absolute border-[#1e293b] border-l-2 border-r-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[22px] relative size-full">
        <H2Margin />
        <UlMargin />
        <ButtonBtn />
      </div>
    </div>
  );
}

function ABtn() {
  return (
    <div className="bg-[#ec4899] relative rounded-[12px] shrink-0 w-full" data-name="a.btn">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[12px] relative w-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]" data-name="a.btn:shadow" />
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14.4px] text-center text-white whitespace-nowrap">
            <p className="leading-[normal]">Responses</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ABtn1() {
  return (
    <div className="bg-[#06b6d4] relative rounded-[12px] shrink-0 w-full" data-name="a.btn">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[12px] relative w-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]" data-name="a.btn:shadow" />
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14.8px] text-center text-white whitespace-nowrap">
            <p className="leading-[normal]">Post</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ABtn2() {
  return (
    <div className="bg-[#eab308] relative rounded-[12px] shrink-0 w-full" data-name="a.btn">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[12px] relative w-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]" data-name="a.btn:shadow" />
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#451a03] text-[14.8px] text-center whitespace-nowrap">
            <p className="leading-[normal]">Send</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonBtn1() {
  return (
    <div className="bg-[#475569] content-stretch flex items-center justify-center pl-[70.88px] pr-[70.87px] py-[12px] relative rounded-[12px] shrink-0" data-name="button.btn">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]" data-name="button.btn:shadow" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[15.9px] text-center text-white whitespace-nowrap">
        <p className="leading-[normal]">Back</p>
      </div>
    </div>
  );
}

function Div2() {
  return (
    <div className="h-full relative shrink-0 w-[200px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between pl-[20px] relative size-full">
        <ABtn />
        <ABtn1 />
        <ABtn2 />
        <ButtonBtn1 />
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#0f172a] relative rounded-[40px] size-full" data-name="Frame">
      <div className="content-stretch flex items-start overflow-clip p-[28px] relative rounded-[inherit] size-full">
        <Div />
        <Div1 />
        <Div2 />
      </div>
      <div aria-hidden="true" className="absolute border-8 border-[#334155] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}