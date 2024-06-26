import { useAnimation } from "framer-motion";

export default function useHomePageAnimation() {
  const profileAnimation = useAnimation();
  const infosAnimation = useAnimation();
  const contactAnimation = useAnimation();
  async function onAppear() {
    profileAnimation.set({ opacity: 0 });
    infosAnimation.set({ x: -200 });
    contactAnimation.set({ opacity: 0 });
    profileAnimation.start({ opacity: 1 }, { duration: 2 });
    infosAnimation.start({ x: 100 }, { duration: 2 });
    await contactAnimation.start({ x: 100 }, { duration: 2 });
  }
  return { profileAnimation, infosAnimation, contactAnimation, onAppear };
}
