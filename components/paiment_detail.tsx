import { CustomButton } from "@/components";

function paiment_detail({ soustotal }: { soustotal: number }) {
  return (
    <div>
      <div className="total-panier  border-black border-[1px] rounded-lg bg-white p-4">
        <h5 className="font-extrabold">Total Panier</h5>
        <div>
          <div className="sous-total flex flex-row justify-between">
            <h5>sous-total </h5> <h5>{`${soustotal} dh`}</h5>
          </div>
        </div>
        <div>
          <CustomButton
            title="Valider la commande"
            class_style="bg-green-500 py-2 w-full mt-4 rounded-md "
            HandleSubmit={() => {}}
          />
        </div>
      </div>
    </div>
  );
}

export default paiment_detail;
