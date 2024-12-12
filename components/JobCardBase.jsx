import Image from "next/image";
import Link from "next/link";
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';

export default function JobCardBase(props) {
    return (
        <div className="bg-white dark:bg-veryDarkBlue rounded-[6px] px-8 py-8 cursor-pointer  relative mt-8 sm:mx-auto w-full ">
            <Link href={`/jobs/${encodeURIComponent(props.data?.id)}`} key={props.id}>
                <div className="h-[100px] w-full overflow-hidden  rounded-md relative flex" style={{ backgroundColor: props.data?.companyDetails?.logoBackground }}>
                    <Image className="transform transition-transform duration-300 hover:scale-110 items-center justify-center rounded-md m-auto object-cover" fill src={props.data?.companyDetails?.logo}   alt="logos" />
                </div>
                <p className=" hover:text-darkGrey font-bold mt-4 dark:text-white text-xl">{props.data?.companyDetails?.name}</p>
                <div className="flex text-darkGrey font-base mt-2">
                    <p className="dark:text-darkGrey">{props.data?.age}</p>
                    <div className="rounded-full bg-darkGrey h-[4px] w-[4px] mx-4 my-auto" />
                    <p>{props.data?.industry}</p>
                    <div className="rounded-full bg-darkGrey h-[4px] w-[4px] mx-4 my-auto" />
                    <p>Revenue: {props.data?.estimatedRevenue}</p>
                    <div className="rounded-full bg-darkGrey h-[4px] w-[4px] mx-4 my-auto" />
                    <p>{props.data?.noOfEmployees} employees</p>
                </div>
                <p className="text-darkGrey font-base text-sm mt-2 ">Worked With: <span className="text-sm hover:text-darkGrey font-bold mt-4 dark:text-white">{props.data?.workedWith}</span></p>
                <p className="text-sm text-lightBlue font-bold mt-4"><LocationOnTwoToneIcon/>{props.data?.location}</p>
            
            </Link>
        </div>
    )
}