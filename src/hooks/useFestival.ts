import { setAsLastUsed } from 'modules/preferences';
import { useFestivals } from 'context/festivals-context';
import type { Festival } from 'festivals';

function findBySlug(festivals: Festival[], festivalSlug: string) {
  return festivals.find(({ slug }) => slug === festivalSlug);
}

function useFestival(festivalSlug: string) {
  const festivals = useFestivals();

  const festival = findBySlug(festivals, festivalSlug);
  if (festival) {
    setAsLastUsed(festival.slug);
  }
  return festival;
}

export default useFestival;
