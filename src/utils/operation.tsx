// TODO 6 - Call buy_ticket entrypoint in the Lottery contract by completing buyTicketOperation
import { tezos } from "./tezos"

export const addUserOperation = async (ImgHash: String) => {
    try {
        const contract = await tezos.wallet.at("KT1AQynC7vfFjvTRk6XbccwvVmuTUWHJE4Rc");
        const op =  await contract.methods.add_user(ImgHash).send()
        await op.confirmation(1)
        alert("Successfully Image Uploaded");
    } catch (error) {
        throw error
    }
};

// TODO 10 - Call end_game entrypoint in the Lottery contract by completing endGameOperation

// export const endGameOperation = async () => {
   
// };
