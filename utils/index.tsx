export type mobile = {
  id: String;
  title: String;
  plateforme: String;
  typeecran: String;
  resolutionecran: String;
  processeur: String;
  stockage: String;
  ram: String;
  battrie: String;
  camera: String;
};
export async function fetchData(params: string | null = "") {
  const res = await fetch(
    `http://localhost:3000/api/mobiles?search=${params}`,
    {
      next: {
        revalidate: 10,
      },
    }
  );
  const data = await res.json();
  return data.filterMobiles;
}
export async function fetchPhoneDetail(id: string) {
  const res = await fetch(` http://localhost:3000/api/mobiles/${id}`, {
    next: {
      revalidate: 30,
    },
  });
  const data = await res.json();
  return data.mobile;
}
