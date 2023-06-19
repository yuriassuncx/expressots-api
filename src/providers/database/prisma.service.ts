import { provide } from "inversify-binding-decorators";
import { PrismaClient } from "@prisma/client";

@provide(PrismaService)
class PrismaService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    get client(): PrismaClient {
        return this.prisma;
    }

    async connect(): Promise<void> {
        await this.prisma.$connect();
    }

    async disconnect(): Promise<void> {
        await this.prisma.$disconnect();
    }

    async enableShutdownHooks(app: any): Promise<void> {
        this.prisma.$on("beforeExit", async () => {
            await app.close();
        });
    }
}

export { PrismaService };
