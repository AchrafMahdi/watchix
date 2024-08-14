import HeroCarousel from "@/components/carousel/HeroCarousel";
import MoviesCarousel from "@/components/carousel/MoviesCarousel";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import { Separator } from "@/components/ui/separator";
import { MoviesApiCalls } from "@/lib/utils";

const Home = async () => {
  const trendingMovies = await MoviesApiCalls.trending();
  const upcomingMovies = await MoviesApiCalls.upcoming();
  const popularMovies = await MoviesApiCalls.popular();
  const RomanceMovies = await MoviesApiCalls.getMovieByGenre("Romance");
  const DramaMovies = await MoviesApiCalls.getMovieByGenre("Drama");
  const ComedyMovies = await MoviesApiCalls.getMovieByGenre("Comedy");
  const warMovies = await MoviesApiCalls.getMovieByGenre("War");
  const actionMovies = await MoviesApiCalls.getMovieByGenre("Action");
  const animationMovies = await MoviesApiCalls.getMovieByGenre("Animation");
  const horrorMovies = await MoviesApiCalls.getMovieByGenre("Horror");
  const fantasyMovies = await MoviesApiCalls.getMovieByGenre("Fantasy");
  const mysteryMovies = await MoviesApiCalls.getMovieByGenre("Mystery");
  const familyMovies = await MoviesApiCalls.getMovieByGenre("Family");
  const DocumentaryMovies = await MoviesApiCalls.getMovieByGenre("Documentary");
  const topRatedMovies = await MoviesApiCalls.topRated();

  return (
    <>
      <div className="w-full relative overflow-hidden">
        <Hero withTrailer />
        <div className="flex justify-start md:justify-center items-center mt-4 pl-1 md:pl-0">
          {trendingMovies && (
            <div className="w-full md:w-[90%]">
              <MoviesCarousel data={trendingMovies.results} name={"Trending"} />
            </div>
          )}
        </div>
        <Separator className="w-[80%] my-6 mx-auto" />
        <div className="flex justify-start md:justify-center items-center pl-1 md:pl-0">
          {popularMovies && (
            <div className="w-full md:w-[90%]">
              <MoviesCarousel data={popularMovies.results} name={"Popular"} />
            </div>
          )}
        </div>
        <Separator className="w-[80%] my-6 mx-auto" />
        <div className="flex justify-start md:justify-center items-center pl-1 md:pl-0">
          <div className="md:w-[90%] w-full">
            {upcomingMovies && (
              <MoviesCarousel
                withDetails
                data={upcomingMovies.results}
                name={"Upcoming"}
              />
            )}
          </div>
        </div>
        <Separator className="w-[80%] my-6 mx-auto" />
        <HeroCarousel data={RomanceMovies.results} title={"Love & Romance"} />
        <Separator className="w-[80%] my-6 mx-auto" />
        <div className="flex justify-start md:justify-center items-center pl-1 md:pl-0">
          <div className="md:w-[90%] w-full">
            {DramaMovies && (
              <MoviesCarousel
                data={DramaMovies.results}
                name={"Drama"}
                withLink
              />
            )}
          </div>
        </div>
        <Separator className="w-[80%] my-6 mx-auto" />
        <div className="flex justify-start md:justify-center items-center pl-1 md:pl-0">
          <div className="md:w-[90%] w-full">
            {ComedyMovies && (
              <MoviesCarousel
                data={ComedyMovies.results}
                name={"Comedy"}
                withLink
              />
            )}
          </div>
        </div>
        <Separator className="w-[80%] my-6 mx-auto" />
        <div className="flex justify-start md:justify-center items-center pl-1 md:pl-0">
          <div className="md:w-[90%] w-full">
            {horrorMovies && (
              <MoviesCarousel
                data={horrorMovies.results}
                name={"Horror"}
                withLink
              />
            )}
          </div>
        </div>
        <Separator className="w-[80%] my-6 mx-auto" />
        <div className="flex justify-start md:justify-center items-center pl-1 md:pl-0">
          <div className="md:w-[90%] w-full">
            {warMovies && (
              <MoviesCarousel
                data={warMovies.results}
                withLink
                name={"War"}
                withDetails
              />
            )}
          </div>
        </div>
        <Separator className="w-[80%] my-6 mx-auto" />
        <HeroCarousel data={animationMovies.results} title={"Animation"} />
        <Separator className="w-[80%] my-6 mx-auto" />
        <div className="flex justify-start md:justify-center items-center pl-1 md:pl-0">
          <div className="md:w-[90%] w-full">
            {actionMovies && (
              <MoviesCarousel
                data={actionMovies.results}
                name={"Action"}
                withLink
              />
            )}
          </div>
        </div>
        <Separator className="w-[80%] my-6 mx-auto" />
        <div className="flex justify-start md:justify-center items-center pl-1 md:pl-0">
          <div className="md:w-[90%] w-full">
            {topRatedMovies && (
              <MoviesCarousel
                data={topRatedMovies.results}
                name={"Top rated movies"}
                withDetails
                withLink
              />
            )}
          </div>
        </div>
        <Separator className="w-[80%] my-6 mx-auto" />
        <div className="flex justify-start md:justify-center items-center pl-1 md:pl-0">
          <div className="md:w-[90%] w-full">
            {fantasyMovies && (
              <MoviesCarousel
                data={fantasyMovies.results}
                name={"Fantasy"}
                withLink
              />
            )}
          </div>
        </div>
        <Separator className="w-[80%] my-6 mx-auto" />
        <HeroCarousel data={mysteryMovies.results} title={"Mystery"} />
        <Separator className="w-[80%] my-6 mx-auto" />
        <div className="flex justify-start md:justify-center items-center pl-1 md:pl-0">
          <div className="md:w-[90%] w-full">
            {familyMovies && (
              <MoviesCarousel
                data={familyMovies.results}
                name={"Family"}
                withLink
              />
            )}
          </div>
        </div>
        <Separator className="w-[80%] my-6 mx-auto" />
        <div className="flex justify-start md:justify-center items-center pl-1 md:pl-0">
          <div className="md:w-[90%] w-full">
            {DocumentaryMovies && (
              <MoviesCarousel
                data={DocumentaryMovies.results}
                name={"Documentary"}
                withDetails
                withLink
              />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
