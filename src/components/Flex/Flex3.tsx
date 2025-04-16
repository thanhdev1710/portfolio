import { ShootingStars } from "../shared/shooting-stars";
import { Slider } from "../shared/Slider";
import { StarsBackground } from "../shared/stars-background";
import { ButtonToggle } from "../shared/ButtonToggle";
import FormSubscribeEmail from "../Form/FormSubscribeEmail";

export function Flex3() {
  return (
    <section className="h-full w-full flex gap-4 Flex3 max-xl:flex-col-reverse">
      <article className="card-customer !w-[45%] p-6 flex flex-col justify-between max-xl:!w-full max-xl:!h-[200px] max-md:!h-full">
        <h3 className="text-lg relative z-10 tracking-widest font-light text-[var(--text-secondary)] mb-4 uppercase">
          Đăng ký nhận tin
        </h3>
        <p className="text-base relative z-10 font-medium text-[var(--text-primary)] mb-4">
          Nhận thông báo khi mình có bài viết mới! Nhập email để theo dõi nhé.
        </p>

        <FormSubscribeEmail />
        <ShootingStars />
        <StarsBackground />
      </article>
      <article className="flex gap-4 !w-[55%] max-xl:!w-full h-full max-xl:!h-[200px] max-md:!h-full max-md:flex-col">
        <div className="card-customer max-md:!w-full !w-[60%] p-6 flex items-center justify-between max-xl:!w-[75%]">
          <div className="w-full">
            <h3 className="text-3xl font-medium mb-10 relative z-10">
              Công nghệ mình sử dụng
            </h3>
            <Slider />
          </div>
          <ShootingStars />
          <StarsBackground />
        </div>
        <div className="card-customer max-md:!w-full max-md:p-6 !w-[40%] flex items-center justify-center">
          <ButtonToggle />
          <ShootingStars />
          <StarsBackground />
        </div>
      </article>
    </section>
  );
}
