PGDMP     :                    |            digital_finance    15.5    15.2     k           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            l           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            m           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            n           1262    16389    digital_finance    DATABASE     z   CREATE DATABASE digital_finance WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.UTF8';
    DROP DATABASE digital_finance;
                icediver    false            o           0    0    digital_finance    DATABASE PROPERTIES     8   ALTER DATABASE digital_finance SET "TimeZone" TO 'utc';
                     icediver    false            �            1259    16421    Course    TABLE     �  CREATE TABLE public."Course" (
    id integer NOT NULL,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp(3) without time zone NOT NULL,
    title text NOT NULL,
    slug text NOT NULL,
    description text NOT NULL,
    price integer NOT NULL,
    sale integer DEFAULT 0 NOT NULL,
    images text[],
    lessons text[],
    views integer DEFAULT 0 NOT NULL,
    category_id integer,
    teacher_id integer
);
    DROP TABLE public."Course";
       public         heap    icediver    false            �            1259    16420    Course_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Course_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public."Course_id_seq";
       public          icediver    false    217            p           0    0    Course_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public."Course_id_seq" OWNED BY public."Course".id;
          public          icediver    false    216            �           2604    16424 	   Course id    DEFAULT     j   ALTER TABLE ONLY public."Course" ALTER COLUMN id SET DEFAULT nextval('public."Course_id_seq"'::regclass);
 :   ALTER TABLE public."Course" ALTER COLUMN id DROP DEFAULT;
       public          icediver    false    217    216    217            h          0    16421    Course 
   TABLE DATA           �   COPY public."Course" (id, created_at, updated_at, title, slug, description, price, sale, images, lessons, views, category_id, teacher_id) FROM stdin;
    public          icediver    false    217   @       q           0    0    Course_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Course_id_seq"', 1, true);
          public          icediver    false    216            �           2606    16431    Course Course_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."Course"
    ADD CONSTRAINT "Course_pkey" PRIMARY KEY (id);
 @   ALTER TABLE ONLY public."Course" DROP CONSTRAINT "Course_pkey";
       public            icediver    false    217            �           1259    16486    Course_slug_key    INDEX     M   CREATE UNIQUE INDEX "Course_slug_key" ON public."Course" USING btree (slug);
 %   DROP INDEX public."Course_slug_key";
       public            icediver    false    217            �           1259    16485    Course_title_key    INDEX     O   CREATE UNIQUE INDEX "Course_title_key" ON public."Course" USING btree (title);
 &   DROP INDEX public."Course_title_key";
       public            icediver    false    217            �           2606    16494    Course Course_category_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Course"
    ADD CONSTRAINT "Course_category_id_fkey" FOREIGN KEY (category_id) REFERENCES public."Category"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 L   ALTER TABLE ONLY public."Course" DROP CONSTRAINT "Course_category_id_fkey";
       public          icediver    false    217            �           2606    16499    Course Course_teacher_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Course"
    ADD CONSTRAINT "Course_teacher_id_fkey" FOREIGN KEY (teacher_id) REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 K   ALTER TABLE ONLY public."Course" DROP CONSTRAINT "Course_teacher_id_fkey";
       public          icediver    false    217            h   ;  x�͓�J�0���S�ɓivqݽ	=xPP�26c[�fJ��Ze����|������z	L�����JOs�s=],�d������g=�GJ�3Bg���-��)����a�[�6�9&14y�%]zr�eI�C�b�ъ� �v�uM�d�5+�jv��	C�V�E�a����z���Rv,������4pl��Zv-D���h̘��h͒`�ޥK��n��I7c�p��a #�gL���5E��U�}�"���0�C������۱���w��{D�ÿ,�s��s!��P�s��e7�S<7Qբ�nd�e�m޺�     