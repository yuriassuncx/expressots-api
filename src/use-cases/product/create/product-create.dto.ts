interface ICreateProductRequestDTO {
    name: string;
    description: string;
    photoUrl: string;
    price: number;
}

interface ICreateProductResponseDTO {
    id: string;
    name: string;
    description: string;
    photoUrl: string;
    price: number;
}

export { ICreateProductRequestDTO, ICreateProductResponseDTO };
