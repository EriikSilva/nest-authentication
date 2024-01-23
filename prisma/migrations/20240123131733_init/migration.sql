-- CreateTable
CREATE TABLE "usuario" (
    "id_usuario" UUID NOT NULL,
    "email" VARCHAR NOT NULL,
    "senha" VARCHAR NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");
