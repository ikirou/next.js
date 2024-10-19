"use client";
import { PhoneCard } from "@/components";
import { fetchData } from "@/utils";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
function searchPage() {
  const [listsearchs, setListSearchs] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchparams = useSearchParams();
  let searchitem: string | null = searchparams.get("search");
  /*  const getsearchitems = async () => {
    const listSearch = await fetchData(searchitem);
   setListSearchs(listSearch);
    setLoading(false);
  };
  getsearchitems(); */
  useEffect(() => {
    fetch(`http://localhost:3000/api/mobiles?search=${searchitem}`)
      .then((res) => res.json())
      .then((data) => {
        setListSearchs(data.filterMobiles);
        setLoading(false);
      });
  }, [searchitem]);

  if (loading)
    return (
      <div className="flex justify-center items-center">
        <span className="text-white font-extrabold text-[1rem]">
          Loading...
        </span>
      </div>
    );
  if (listsearchs.length === 0)
    return (
      <div className="flex justify-center items-center">
        <span className="text-white font-extrabold text-[1rem]">
          NOT FOUNd!!!
        </span>
      </div>
    );
  return (
    <div className="md:border-[#106EBE] md:border-[1px] rounded-md md:p-8 md:m-4">
      <div className=" mx-4 my-4 grid grid-cols-1 md:grid-cols-4 gap-4">
        {listsearchs?.map((item: any) => (
          <div key={item.id}>
            <PhoneCard mobile={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default searchPage;
