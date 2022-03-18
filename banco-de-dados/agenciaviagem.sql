USE [AgenciaDeViagens]
GO
/****** Object:  Table [dbo].[cliente]    Script Date: 18/03/2022 17:35:05 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cliente](
	[id_cliente] [bigint] IDENTITY(1,1) NOT NULL,
	[cpf] [varchar](255) NULL,
	[email] [varchar](255) NULL,
	[nome] [varchar](255) NULL,
	[sobrenome] [varchar](255) NULL,
	[telefone] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[id_cliente] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[pacote]    Script Date: 18/03/2022 17:35:05 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[pacote](
	[id_pacote] [bigint] IDENTITY(1,1) NOT NULL,
	[descricao_destino] [varchar](255) NULL,
	[destino] [varchar](255) NULL,
	[preco] [varchar](255) NULL,
	[url_image] [varchar](255) NULL,
	[cliente_id] [bigint] NULL,
	[promocao_id] [bigint] NULL,
PRIMARY KEY CLUSTERED 
(
	[id_pacote] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[promocao]    Script Date: 18/03/2022 17:35:05 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[promocao](
	[id_promo] [bigint] IDENTITY(1,1) NOT NULL,
	[descricao_promo] [varchar](255) NULL,
	[destino_promo] [varchar](255) NULL,
	[preco_promo] [varchar](255) NULL,
	[url_image] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[id_promo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[pacote]  WITH CHECK ADD  CONSTRAINT [FKg2ajcn4sot83btl950c6t5d0b] FOREIGN KEY([promocao_id])
REFERENCES [dbo].[promocao] ([id_promo])
GO
ALTER TABLE [dbo].[pacote] CHECK CONSTRAINT [FKg2ajcn4sot83btl950c6t5d0b]
GO
ALTER TABLE [dbo].[pacote]  WITH CHECK ADD  CONSTRAINT [FKmseeja6p8wcbijd3tn1ugp976] FOREIGN KEY([cliente_id])
REFERENCES [dbo].[cliente] ([id_cliente])
GO
ALTER TABLE [dbo].[pacote] CHECK CONSTRAINT [FKmseeja6p8wcbijd3tn1ugp976]
GO
