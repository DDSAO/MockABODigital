import { CustomisedSolution } from "./_components/CustomisedSolution";
import { HorizontalScrolling } from "./_components/HorizontalScrolling";
import { LandingPage } from "./_components/LandingPage";
import { LatestNews } from "./_components/LatestNews";
import { WorkTogether } from "./_components/WorkTogether";

export default function Home() {
  return (
    <div>
      <LandingPage />
      <CustomisedSolution />
      <HorizontalScrolling />
      <WorkTogether />
      <LatestNews />
    </div>
  );
}
