import BreadcrumbCus from "@/components/shared/BreadcrumbCus";
import Hashtag from "@/components/shared/Hashtag";
import { GetAllHashtag } from "@/services/Hashtag";

export const revalidate = 60;

export default async function Page() {
  const { data } = await GetAllHashtag();

  return (
    <>
      <BreadcrumbCus
        urls={[
          { label: "Trang chủ", url: "/" },
          { label: "Hashtag", url: "/tags" },
        ]}
      />
      <h1 className="my-4 font-bold md:text-4xl text-2xl">
        Các hashtag phổ biến
      </h1>
      <section className="flex flex-wrap gap-8">
        {data.map((hashtag) => (
          <div className="relative group" key={hashtag.name}>
            <div
              className={`absolute -top-4 -left-4 transition-all duration-500  ${
                hashtag.countBlog > 100
                  ? "bg-red-400 border-2 border-red-300 group-hover:bg-red-600"
                  : "bg-blue-400 border-2 border-blue-300 group-hover:bg-blue-600"
              }  text-white rounded-full size-10 flex items-center justify-center text-xs`}
            >
              {hashtag.countBlog > 100 ? "100+" : hashtag.countBlog}
            </div>
            <Hashtag
              className={`px-6 py-4 h-full transition-all duration-500 text-xl text-white w-32 ${
                hashtag.countBlog > 100
                  ? "bg-red-400 group-hover:bg-red-600"
                  : "bg-blue-400 group-hover:bg-blue-600"
              }`}
              label={hashtag.name}
              url={hashtag.name}
            />
          </div>
        ))}
      </section>
    </>
  );
}
