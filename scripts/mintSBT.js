async function main() {
    const to = "0x3511a6FfBc713E53339BE052795e095c2E0ce30D";
    const uri = "QmZ3yPetFfB7kmDeFVqXppxGH6TzFM2PWJjZvTjxWhZWP3";
    const address = "0xBc41DE01174589FfdFCFFbB66Cb65e8Ed7d4963D";
    const SoulBoundTest = await hre.ethers.getContractFactory("SoulBoundTest");
    const soulBoundTest = await SoulBoundTest.attach(address);

    const value = await soulBoundTest.safeMint(to, uri);
    console.log(value);


}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });