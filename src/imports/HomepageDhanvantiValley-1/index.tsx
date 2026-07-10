import imgDhanvntiValleyLogoFroLightBg1 from "./061091c707bc10070bcb7df114ead0673c2febb9.png";
import imgDhanvantiValleyLogo1 from "./3096135ff5cd0c778307cd0faa1b3d985eac9672.png";
import imgPicture11 from "./e9ae1adab063682066956368110ab6ac7eec658c.png";

function CardGridContentList() {
  return (
    <div className="absolute flex h-[588px] items-center justify-center left-0 top-[135px] w-[1200px]">
      <div className="-scale-y-100 flex-none">
        <div className="bg-[#f2f6df] content-stretch flex flex-col h-[588px] items-start p-[64px] relative w-[1200px]" data-name="Card Grid Content List" />
      </div>
    </div>
  );
}

function Figma() {
  return (
    <div className="h-[35px] relative shrink-0 w-[40px]" data-name="Figma">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 35">
        <g id="Figma" />
      </svg>
    </div>
  );
}

function Block() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Block">
      <Figma />
    </div>
  );
}

function Slot() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[618px] top-[51px]" data-name="Slot">
      <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Navigation Pill">
        <button className="[word-break:break-word] cursor-pointer flex flex-col font-['Chopin-Trial_VF:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2c2c2c] text-[16px] text-left whitespace-nowrap">
          <p className="leading-none">Philosophy</p>
        </button>
      </div>
      <button className="content-stretch cursor-pointer flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Navigation Pill">
        <div className="[word-break:break-word] flex flex-col font-['Chopin-Trial_VF:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2c2c2c] text-[16px] text-left whitespace-nowrap" role="button" tabIndex={0}>
          <p className="leading-none">Gallery</p>
        </div>
      </button>
      <button className="content-stretch cursor-pointer flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Navigation Pill">
        <div className="[word-break:break-word] flex flex-col font-['Chopin-Trial_VF:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2c2c2c] text-[16px] text-left whitespace-nowrap">
          <p className="leading-none">Location</p>
        </div>
      </button>
      <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Navigation Pill">
        <div className="[word-break:break-word] flex flex-col font-['Chopin-Trial_VF:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2c2c2c] text-[16px] whitespace-nowrap">
          <p className="leading-none">Brochure</p>
        </div>
      </div>
    </div>
  );
}

function TextContainer() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] h-[190px] items-start leading-[1.5] relative shrink-0 w-[355px] whitespace-pre-wrap" data-name="Text Container">
      <p className="absolute font-['Bavicka:Regular',sans-serif] left-0 not-italic text-[#638038] text-[28px] top-[75px] w-[412px]">
        {`Eqnuire About `}
        <br aria-hidden />
        Dhanvanti Valley
      </p>
      <p className="absolute font-['Urbanist:Medium',sans-serif] font-medium left-[-3.38px] text-[#999] text-[16px] top-[189.25px] w-[355px]">
        {`Interested in this project? `}
        <br aria-hidden />
        Fill out the form, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have.
      </p>
    </div>
  );
}

function InputField() {
  return (
    <div className="bg-[rgba(99,128,56,0.24)] relative rounded-[6px] shrink-0 w-full" data-name="Input Field">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[16px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Chopin-Trial_VF:Medium',sans-serif] leading-[20px] min-w-px not-italic relative text-[#638038] text-[14px]">Enter First Name</p>
        </div>
      </div>
    </div>
  );
}

function SubContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px relative" data-name="Sub Container">
      <p className="[word-break:break-word] font-['Chopin-Trial_VF:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#638038] text-[16px] w-full">First Name</p>
      <InputField />
    </div>
  );
}

function InputField1() {
  return (
    <div className="bg-[rgba(99,128,56,0.24)] relative rounded-[6px] shrink-0 w-full" data-name="Input Field">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[16px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Chopin-Trial_VF:Medium',sans-serif] leading-[20px] min-w-px not-italic relative text-[#638038] text-[14px]">Enter Last Name</p>
        </div>
      </div>
    </div>
  );
}

function SubContainer1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px relative" data-name="Sub Container">
      <p className="[word-break:break-word] font-['Chopin-Trial_VF:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#638038] text-[16px] w-full">Last Name</p>
      <InputField1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[30px] items-start relative shrink-0 w-full" data-name="Container">
      <SubContainer />
      <SubContainer1 />
    </div>
  );
}

function InputField2() {
  return (
    <div className="bg-[rgba(99,128,56,0.24)] relative rounded-[6px] shrink-0 w-full" data-name="Input Field">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[16px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Chopin-Trial_VF:Medium',sans-serif] leading-[20px] min-w-px not-italic relative text-[#638038] text-[14px]">Enter your Email</p>
        </div>
      </div>
    </div>
  );
}

function SubContainer2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px relative" data-name="Sub Container">
      <p className="[word-break:break-word] font-['Chopin-Trial_VF:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#638038] text-[16px] w-full">Email</p>
      <InputField2 />
    </div>
  );
}

function InputField3() {
  return (
    <div className="bg-[rgba(99,128,56,0.24)] relative rounded-[6px] shrink-0 w-full" data-name="Input Field">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[16px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Chopin-Trial_VF:Medium',sans-serif] leading-[20px] min-w-px not-italic relative text-[#638038] text-[14px]">Enter Phone Number</p>
        </div>
      </div>
    </div>
  );
}

function SubContainer3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px relative" data-name="Sub Container">
      <p className="[word-break:break-word] font-['Urbanist:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#638038] text-[16px] w-full">Phone</p>
      <InputField3 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[30px] items-start relative shrink-0 w-full" data-name="Container">
      <SubContainer2 />
      <SubContainer3 />
    </div>
  );
}

function InputField4() {
  return (
    <div className="bg-[rgba(99,128,56,0.24)] relative rounded-[6px] shrink-0 w-full" data-name="Input Field">
      <div className="content-stretch flex items-start px-[20px] py-[16px] relative size-full">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Chopin-Trial_VF:Medium',sans-serif] leading-[20px] min-w-px not-italic relative text-[#638038] text-[14px]">Enter your Message here..</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Chopin-Trial_VF:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#638038] text-[16px] w-full">Message</p>
      <InputField4 />
    </div>
  );
}

function FormElements() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Form Elements">
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

function CheckBox() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-w-px relative" data-name="Check Box">
      <div className="bg-[rgba(99,128,56,0.24)] relative rounded-[4px] shrink-0 size-[24px]" data-name="Shape" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Urbanist:Medium',sans-serif] font-medium leading-[0] min-w-px relative text-[#999] text-[16px]">
        <span className="leading-[1.5]">{`I agree with `}</span>
        <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[1.5] underline">Terms of Use</span>
        <span className="leading-[1.5]">{` and `}</span>
        <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[1.5] underline">Privacy Policy</span>
      </p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#ca9731] content-stretch flex items-center justify-center px-[34px] py-[14px] relative rounded-[6px] shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Urbanist:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[14px] text-white whitespace-nowrap">Send Your Message</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[50px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <CheckBox />
      <Button />
    </div>
  );
}

function Form() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[40px] items-center justify-center left-[412px] p-[40px] rounded-[10px] top-[61px] w-[695px]" data-name="Form">
      <div aria-hidden className="absolute border border-[#638038] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <FormElements />
      <Container4 />
    </div>
  );
}

function Container() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[80px] h-[606px] items-start left-[calc(50%+25px)] top-[117px] w-[1150px]" data-name="Container">
      <TextContainer />
      <Form />
    </div>
  );
}

function TextContentHeading() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-start left-0 not-italic top-0 w-[119px]" data-name="Text Content Heading">
      <p className="font-['Chopin-Trial_VF:Roman',sans-serif] leading-[1.2] relative shrink-0 text-[#638038] text-[24px] tracking-[-0.48px] w-full">DEVELOPER</p>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757575] text-[20px] w-full">
        <p className="leading-[1.2]">​</p>
      </div>
    </div>
  );
}

function TextContentHeading1() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-start left-[787px] not-italic top-0 w-[134px]" data-name="Text Content Heading">
      <p className="font-['Chopin-Trial_VF:Roman',sans-serif] leading-[1.2] relative shrink-0 text-[#638038] text-[24px] tracking-[-0.48px] w-full">POSSESSION</p>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757575] text-[20px] w-full">
        <p className="leading-[1.2]">​</p>
      </div>
    </div>
  );
}

function TextContentHeading2() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-start left-[395px] not-italic top-0 w-[53px]" data-name="Text Content Heading">
      <p className="font-['Chopin-Trial_VF:Roman',sans-serif] leading-[1.2] relative shrink-0 text-[#638038] text-[24px] tracking-[-0.48px] w-full">RERA</p>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757575] text-[20px] w-full">
        <p className="leading-[1.2]">​</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[395px] top-0">
      <TextContentHeading2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[121px] overflow-clip relative shrink-0 w-[1143px]">
      <TextContentHeading />
      <TextContentHeading1 />
      <Group />
    </div>
  );
}

function CardGridContentList1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[32px] h-[208px] items-start left-px p-[64px] top-[723px] w-[1200px]" data-name="Card Grid Content List">
      <Frame />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-px top-[723px]">
      <CardGridContentList1 />
      <p className="[word-break:break-word] absolute font-['Chopin-Trial_VF:Roman',sans-serif] h-[68.275px] leading-[1.2] left-[65px] not-italic text-[#638038] text-[36px] top-[834.89px] tracking-[-0.72px] w-[259px]">
        Dhanvanti
        <br aria-hidden />
        Luxury Builders
      </p>
      <p className="[word-break:break-word] absolute font-['Chopin-Trial_VF:Roman',sans-serif] h-[34.137px] leading-[1.2] left-[460px] not-italic text-[#638038] text-[36px] top-[834.89px] tracking-[-0.72px] w-[333px]">UKRE03260000729</p>
      <p className="[word-break:break-word] absolute font-['Chopin-Trial_VF:Roman',sans-serif] h-[34.137px] leading-[1.2] left-[849px] not-italic text-[#638038] text-[36px] top-[834.89px] tracking-[-0.72px] w-[333px]">Q4, 2028</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-px top-[723px]">
      <Group3 />
    </div>
  );
}

function Details() {
  return (
    <div className="absolute contents left-px top-[723px]" data-name="Details">
      <Group1 />
    </div>
  );
}

function CardGridContentList2() {
  return (
    <div className="absolute bg-[#f2f6df] h-[62px] left-px top-[1588px] w-[1200px]" data-name="Card Grid Content List">
      <div className="content-stretch flex flex-col items-start p-[64px] relative size-full" />
    </div>
  );
}

function COpyright() {
  return (
    <div className="absolute contents left-px top-[1588px]" data-name="COpyright">
      <CardGridContentList2 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Chopin-Trial_VF:Roman',sans-serif] leading-[1.2] left-[calc(50%+1.5px)] not-italic text-[#638038] text-[20px] text-center top-[1607px] tracking-[-0.4px] w-[679px]">© 2026 Made by Zebrians Creative Tribe. All rights reserved.</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[11px] top-[1424px]">
      <p className="[word-break:break-word] absolute font-['Chopin-Trial_VF:Roman',sans-serif] leading-[1.2] left-[513px] not-italic text-[#ca9731] text-[20px] top-[1457px] tracking-[-0.4px] w-[119px]">VISIT</p>
      <p className="[word-break:break-word] absolute font-['Chopin-Trial_VF:Roman',sans-serif] leading-[1.2] left-[962px] not-italic text-[#ca9731] text-[20px] top-[1457px] tracking-[-0.4px] w-[119px]">CONTACT</p>
      <a className="absolute block cursor-pointer h-[156px] left-[11px] top-[1424px] w-[461px]" data-name="Dhanvanti Valley Logo 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDhanvantiValleyLogo1.src} />
      </a>
      <p className="[word-break:break-word] absolute font-['Chopin-Trial_VF:Roman',sans-serif] leading-[1.2] left-[513px] not-italic text-[#638038] text-[20px] top-[1502px] tracking-[-0.4px] w-[454px]">Hathibarkala Road, Dehradun, Uttarakhand</p>
      <a className="[word-break:break-word] absolute block font-['Chopin-Trial_VF:Roman',sans-serif] leading-[0] left-[961px] not-italic text-[#638038] text-[20px] top-[1502px] tracking-[-0.4px] whitespace-nowrap" href="file:///Users/arpanjeetkaur/Downloads/dhanvanti-valley(1).html#" target="_blank">
        <p className="cursor-pointer">
          <span className="leading-[1.2]">+91 73985 73985</span>
          <span className="leading-[1.2]">{` `}</span>
        </p>
      </a>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[-7px] top-[976px]">
      <div className="absolute flex h-[431px] items-center justify-center left-[-7px] top-[976px] w-[1215px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[431px] relative w-[1215px]" data-name="Picture1 1">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 overflow-hidden">
                <img alt="" className="absolute h-[214.15%] left-[-0.04%] max-w-none top-0 w-[100.07%]" src={imgPicture11.src} />
              </div>
              <div className="absolute bg-[rgba(0,0,0,0.5)] inset-0" />
            </div>
          </div>
        </div>
      </div>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Chopin-Trial_VF:Medium',sans-serif] leading-[1.2] left-[600.5px] not-italic text-[24px] text-center text-white top-[1186px] tracking-[-0.48px] w-[565px]">
        Experience residences designed around
        <br aria-hidden />
        the way you want to live.
      </p>
      <div className="absolute border border-solid border-white h-[57px] left-[413px] top-[1296px] w-[361px]" />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[-7px] top-[976px]">
      <Group2 />
      <a className="-translate-x-1/2 [word-break:break-word] absolute block cursor-pointer font-['Chopin-Trial_VF:Roman',sans-serif] h-[165px] leading-[0] left-[594px] not-italic text-[20px] text-center text-white top-[1026px] tracking-[-0.4px] w-[932px]">
        <p className="leading-[1.2]">MAKE THE MOVE</p>
      </a>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Bavicka:Regular',sans-serif] leading-[1.2] left-[593.5px] not-italic text-[40px] text-center text-white top-[1126px] tracking-[-0.8px] whitespace-nowrap">Where Time Feels Richer.</p>
      <button className="-translate-x-1/2 [word-break:break-word] absolute block cursor-pointer font-['Chopin-Trial_VF:Roman',sans-serif] h-[37px] leading-[0] left-[586.5px] not-italic text-[26px] text-center text-white top-[1308px] tracking-[-0.52px] uppercase w-[337px]">
        <p className="leading-[1.2]">Schedule Your Visit</p>
      </button>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute contents left-[-7px] top-[976px]" data-name="Footer">
      <Group5 />
      <Group4 />
    </div>
  );
}

export default function HomepageDhanvantiValley() {
  return (
    <div className="bg-white relative size-full" data-name="Homepage Dhanvanti Valley">
      <CardGridContentList />
      <div className="absolute bg-white content-center flex flex-wrap gap-[0px_24px] items-center left-0 overflow-clip p-[32px] top-[18px] w-[1200px]" data-name="Header">
        <Block />
        <div className="content-start flex flex-[1_0_0] flex-wrap gap-y-[8px] h-[32px] items-start justify-end min-w-px relative" data-name="Navigation Pill List" />
        <button className="content-stretch cursor-pointer flex gap-[12px] items-center relative shrink-0 w-[178px]" data-name="Header Auth">
          <div className="bg-[#638038] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Button">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#f5f5f5] text-[16px] text-left whitespace-nowrap">Enquire Now</p>
              </div>
            </div>
          </div>
        </button>
      </div>
      <Slot />
      <a className="absolute block cursor-pointer h-[66px] left-[21px] top-[35px] w-[331px]" data-name="Dhanvnti Valley Logo_FroLightBG 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[357.31%] left-0 max-w-none top-[-108.86%] w-full" src={imgDhanvntiValleyLogoFroLightBg1.src} />
        </div>
      </a>
      <p className="[word-break:break-word] absolute font-['Chopin-Trial_VF:Roman',sans-serif] h-[41px] leading-[1.2] left-px not-italic text-[25px] text-white top-[606px] tracking-[-0.5px] w-[93px]">6:4</p>
      <Container />
      <Details />
      <COpyright />
      <Footer />
    </div>
  );
}