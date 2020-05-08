import { setAsLastUsed } from 'modules/preferences';
import { festivals } from 'festivals';
import type { Festival } from 'festivals';

function findBySlug(festivals: Festival[], festivalSlug: string) {
  return festivals.find(({ slug }) => slug === festivalSlug);
}

function useFestival(festivalSlug: string) {
  const festival = findBySlug(festivals, festivalSlug);
  if (festival) {
    setAsLastUsed(festival.slug);
  }
  return festival;
}

export default useFestival;
