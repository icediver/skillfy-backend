PGDMP         %                |            skillfy    15.2    15.2 S    o           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            p           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            q           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            r           1262    1081908    skillfy    DATABASE     i   CREATE DATABASE skillfy WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C';
    DROP DATABASE skillfy;
                postgres    false                        2615    1082043    public    SCHEMA     2   -- *not* creating schema, since initdb creates it
 2   -- *not* dropping schema, since initdb creates it
                postgres    false            s           0    0    SCHEMA public    COMMENT         COMMENT ON SCHEMA public IS '';
                   postgres    false    5            t           0    0    SCHEMA public    ACL     +   REVOKE USAGE ON SCHEMA public FROM PUBLIC;
                   postgres    false    5            T           1247    1082045    EnumOrderStatus    TYPE     m   CREATE TYPE public."EnumOrderStatus" AS ENUM (
    'PENDING',
    'PAYED',
    'SHIPPED',
    'DELIVERED'
);
 $   DROP TYPE public."EnumOrderStatus";
       public          postgres    false    5            �            1259    1082076    Category    TABLE     @  CREATE TABLE public."Category" (
    id integer NOT NULL,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp(3) without time zone NOT NULL,
    name text NOT NULL,
    slug text NOT NULL,
    description text NOT NULL,
    icon text NOT NULL,
    colors text[]
);
    DROP TABLE public."Category";
       public         heap    postgres    false    5            �            1259    1082075    Category_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Category_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Category_id_seq";
       public          postgres    false    5    219            u           0    0    Category_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Category_id_seq" OWNED BY public."Category".id;
          public          postgres    false    218            �            1259    1082066    Course    TABLE     �  CREATE TABLE public."Course" (
    id integer NOT NULL,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp(3) without time zone NOT NULL,
    title text NOT NULL,
    slug text NOT NULL,
    description text NOT NULL,
    price integer NOT NULL,
    images text[],
    lessons text[],
    category_id integer,
    teacher_id integer,
    views integer DEFAULT 0 NOT NULL,
    sale integer DEFAULT 0 NOT NULL
);
    DROP TABLE public."Course";
       public         heap    postgres    false    5            �            1259    1082065    Course_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Course_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public."Course_id_seq";
       public          postgres    false    5    217            v           0    0    Course_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public."Course_id_seq" OWNED BY public."Course".id;
          public          postgres    false    216            �            1259    1082096    Order    TABLE     W  CREATE TABLE public."Order" (
    id integer NOT NULL,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp(3) without time zone NOT NULL,
    status public."EnumOrderStatus" DEFAULT 'PENDING'::public."EnumOrderStatus" NOT NULL,
    total integer NOT NULL,
    user_id integer NOT NULL
);
    DROP TABLE public."Order";
       public         heap    postgres    false    852    852    5            �            1259    1082095    Order_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Order_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Order_id_seq";
       public          postgres    false    223    5            w           0    0    Order_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Order_id_seq" OWNED BY public."Order".id;
          public          postgres    false    222            �            1259    1082105 
   Order_item    TABLE     9  CREATE TABLE public."Order_item" (
    id integer NOT NULL,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp(3) without time zone NOT NULL,
    quantity integer NOT NULL,
    price integer NOT NULL,
    order_id integer,
    course_id integer NOT NULL
);
     DROP TABLE public."Order_item";
       public         heap    postgres    false    5            �            1259    1082104    Order_item_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Order_item_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."Order_item_id_seq";
       public          postgres    false    5    225            x           0    0    Order_item_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."Order_item_id_seq" OWNED BY public."Order_item".id;
          public          postgres    false    224            �            1259    1082086    Review    TABLE     7  CREATE TABLE public."Review" (
    id integer NOT NULL,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp(3) without time zone NOT NULL,
    rating integer NOT NULL,
    text text NOT NULL,
    user_id integer NOT NULL,
    course_id integer NOT NULL
);
    DROP TABLE public."Review";
       public         heap    postgres    false    5            �            1259    1082085    Review_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Review_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public."Review_id_seq";
       public          postgres    false    5    221            y           0    0    Review_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public."Review_id_seq" OWNED BY public."Review".id;
          public          postgres    false    220            �            1259    1082054    User    TABLE     9  CREATE TABLE public."User" (
    id integer NOT NULL,
    email text NOT NULL,
    name text NOT NULL,
    password text NOT NULL,
    is_admin boolean DEFAULT false NOT NULL,
    is_email_verified boolean DEFAULT false NOT NULL,
    avatar_path text DEFAULT '/uploads/avatars/unknown_user.jpg'::text NOT NULL
);
    DROP TABLE public."User";
       public         heap    postgres    false    5            �            1259    1082053    User_id_seq    SEQUENCE     �   CREATE SEQUENCE public."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public."User_id_seq";
       public          postgres    false    5    215            z           0    0    User_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;
          public          postgres    false    214            �            1259    1082113    Video    TABLE     \  CREATE TABLE public."Video" (
    id integer NOT NULL,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp(3) without time zone NOT NULL,
    source text NOT NULL,
    chapter text NOT NULL,
    slug text NOT NULL,
    title text NOT NULL,
    overview text NOT NULL,
    course_id integer
);
    DROP TABLE public."Video";
       public         heap    postgres    false    5            �            1259    1082112    Video_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Video_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Video_id_seq";
       public          postgres    false    5    227            {           0    0    Video_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Video_id_seq" OWNED BY public."Video".id;
          public          postgres    false    226            �            1259    1082171    _User favorites    TABLE     ^   CREATE TABLE public."_User favorites" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);
 %   DROP TABLE public."_User favorites";
       public         heap    postgres    false    5            �            1259    1098132    _User purchases    TABLE     ^   CREATE TABLE public."_User purchases" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);
 %   DROP TABLE public."_User purchases";
       public         heap    postgres    false    5            �           2604    1082079    Category id    DEFAULT     n   ALTER TABLE ONLY public."Category" ALTER COLUMN id SET DEFAULT nextval('public."Category_id_seq"'::regclass);
 <   ALTER TABLE public."Category" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    219    219            �           2604    1082069 	   Course id    DEFAULT     j   ALTER TABLE ONLY public."Course" ALTER COLUMN id SET DEFAULT nextval('public."Course_id_seq"'::regclass);
 :   ALTER TABLE public."Course" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    216    217            �           2604    1082099    Order id    DEFAULT     h   ALTER TABLE ONLY public."Order" ALTER COLUMN id SET DEFAULT nextval('public."Order_id_seq"'::regclass);
 9   ALTER TABLE public."Order" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    223    222    223            �           2604    1082108    Order_item id    DEFAULT     r   ALTER TABLE ONLY public."Order_item" ALTER COLUMN id SET DEFAULT nextval('public."Order_item_id_seq"'::regclass);
 >   ALTER TABLE public."Order_item" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    225    224    225            �           2604    1082089 	   Review id    DEFAULT     j   ALTER TABLE ONLY public."Review" ALTER COLUMN id SET DEFAULT nextval('public."Review_id_seq"'::regclass);
 :   ALTER TABLE public."Review" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    221    221            �           2604    1082057    User id    DEFAULT     f   ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);
 8   ALTER TABLE public."User" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    215    215            �           2604    1082116    Video id    DEFAULT     h   ALTER TABLE ONLY public."Video" ALTER COLUMN id SET DEFAULT nextval('public."Video_id_seq"'::regclass);
 9   ALTER TABLE public."Video" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    227    227            b          0    1082076    Category 
   TABLE DATA           g   COPY public."Category" (id, created_at, updated_at, name, slug, description, icon, colors) FROM stdin;
    public          postgres    false    219   d       `          0    1082066    Course 
   TABLE DATA           �   COPY public."Course" (id, created_at, updated_at, title, slug, description, price, images, lessons, category_id, teacher_id, views, sale) FROM stdin;
    public          postgres    false    217   ff       f          0    1082096    Order 
   TABLE DATA           U   COPY public."Order" (id, created_at, updated_at, status, total, user_id) FROM stdin;
    public          postgres    false    223   (i       h          0    1082105 
   Order_item 
   TABLE DATA           h   COPY public."Order_item" (id, created_at, updated_at, quantity, price, order_id, course_id) FROM stdin;
    public          postgres    false    225   Ei       d          0    1082086    Review 
   TABLE DATA           `   COPY public."Review" (id, created_at, updated_at, rating, text, user_id, course_id) FROM stdin;
    public          postgres    false    221   bi       ^          0    1082054    User 
   TABLE DATA           e   COPY public."User" (id, email, name, password, is_admin, is_email_verified, avatar_path) FROM stdin;
    public          postgres    false    215   Yk       j          0    1082113    Video 
   TABLE DATA           p   COPY public."Video" (id, created_at, updated_at, source, chapter, slug, title, overview, course_id) FROM stdin;
    public          postgres    false    227   bl       k          0    1082171    _User favorites 
   TABLE DATA           5   COPY public."_User favorites" ("A", "B") FROM stdin;
    public          postgres    false    228   �m       l          0    1098132    _User purchases 
   TABLE DATA           5   COPY public."_User purchases" ("A", "B") FROM stdin;
    public          postgres    false    229   �m       |           0    0    Category_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Category_id_seq"', 9, true);
          public          postgres    false    218            }           0    0    Course_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Course_id_seq"', 7, true);
          public          postgres    false    216            ~           0    0    Order_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Order_id_seq"', 1, false);
          public          postgres    false    222                       0    0    Order_item_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."Order_item_id_seq"', 1, false);
          public          postgres    false    224            �           0    0    Review_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Review_id_seq"', 2, true);
          public          postgres    false    220            �           0    0    User_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public."User_id_seq"', 2, true);
          public          postgres    false    214            �           0    0    Video_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public."Video_id_seq"', 4, true);
          public          postgres    false    226            �           2606    1082084    Category Category_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Category"
    ADD CONSTRAINT "Category_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Category" DROP CONSTRAINT "Category_pkey";
       public            postgres    false    219            �           2606    1082074    Course Course_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."Course"
    ADD CONSTRAINT "Course_pkey" PRIMARY KEY (id);
 @   ALTER TABLE ONLY public."Course" DROP CONSTRAINT "Course_pkey";
       public            postgres    false    217            �           2606    1082111    Order_item Order_item_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public."Order_item"
    ADD CONSTRAINT "Order_item_pkey" PRIMARY KEY (id);
 H   ALTER TABLE ONLY public."Order_item" DROP CONSTRAINT "Order_item_pkey";
       public            postgres    false    225            �           2606    1082103    Order Order_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Order"
    ADD CONSTRAINT "Order_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Order" DROP CONSTRAINT "Order_pkey";
       public            postgres    false    223            �           2606    1082094    Review Review_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."Review"
    ADD CONSTRAINT "Review_pkey" PRIMARY KEY (id);
 @   ALTER TABLE ONLY public."Review" DROP CONSTRAINT "Review_pkey";
       public            postgres    false    221            �           2606    1082064    User User_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."User" DROP CONSTRAINT "User_pkey";
       public            postgres    false    215            �           2606    1082121    Video Video_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Video"
    ADD CONSTRAINT "Video_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Video" DROP CONSTRAINT "Video_pkey";
       public            postgres    false    227            �           1259    1082125    Category_name_key    INDEX     Q   CREATE UNIQUE INDEX "Category_name_key" ON public."Category" USING btree (name);
 '   DROP INDEX public."Category_name_key";
       public            postgres    false    219            �           1259    1082126    Category_slug_key    INDEX     Q   CREATE UNIQUE INDEX "Category_slug_key" ON public."Category" USING btree (slug);
 '   DROP INDEX public."Category_slug_key";
       public            postgres    false    219            �           1259    1082124    Course_slug_key    INDEX     M   CREATE UNIQUE INDEX "Course_slug_key" ON public."Course" USING btree (slug);
 %   DROP INDEX public."Course_slug_key";
       public            postgres    false    217            �           1259    1082123    Course_title_key    INDEX     O   CREATE UNIQUE INDEX "Course_title_key" ON public."Course" USING btree (title);
 &   DROP INDEX public."Course_title_key";
       public            postgres    false    217            �           1259    1082122    User_email_key    INDEX     K   CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);
 $   DROP INDEX public."User_email_key";
       public            postgres    false    215            �           1259    1082127    Video_slug_key    INDEX     K   CREATE UNIQUE INDEX "Video_slug_key" ON public."Video" USING btree (slug);
 $   DROP INDEX public."Video_slug_key";
       public            postgres    false    227            �           1259    1082174    _User favorites_AB_unique    INDEX     d   CREATE UNIQUE INDEX "_User favorites_AB_unique" ON public."_User favorites" USING btree ("A", "B");
 /   DROP INDEX public."_User favorites_AB_unique";
       public            postgres    false    228    228            �           1259    1082175    _User favorites_B_index    INDEX     V   CREATE INDEX "_User favorites_B_index" ON public."_User favorites" USING btree ("B");
 -   DROP INDEX public."_User favorites_B_index";
       public            postgres    false    228            �           1259    1098135    _User purchases_AB_unique    INDEX     d   CREATE UNIQUE INDEX "_User purchases_AB_unique" ON public."_User purchases" USING btree ("A", "B");
 /   DROP INDEX public."_User purchases_AB_unique";
       public            postgres    false    229    229            �           1259    1098136    _User purchases_B_index    INDEX     V   CREATE INDEX "_User purchases_B_index" ON public."_User purchases" USING btree ("B");
 -   DROP INDEX public."_User purchases_B_index";
       public            postgres    false    229            �           2606    1082128    Course Course_category_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Course"
    ADD CONSTRAINT "Course_category_id_fkey" FOREIGN KEY (category_id) REFERENCES public."Category"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 L   ALTER TABLE ONLY public."Course" DROP CONSTRAINT "Course_category_id_fkey";
       public          postgres    false    3508    219    217            �           2606    1082133    Course Course_teacher_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Course"
    ADD CONSTRAINT "Course_teacher_id_fkey" FOREIGN KEY (teacher_id) REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 K   ALTER TABLE ONLY public."Course" DROP CONSTRAINT "Course_teacher_id_fkey";
       public          postgres    false    215    3501    217            �           2606    1082158 $   Order_item Order_item_course_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Order_item"
    ADD CONSTRAINT "Order_item_course_id_fkey" FOREIGN KEY (course_id) REFERENCES public."Course"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 R   ALTER TABLE ONLY public."Order_item" DROP CONSTRAINT "Order_item_course_id_fkey";
       public          postgres    false    3503    217    225            �           2606    1082153 #   Order_item Order_item_order_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Order_item"
    ADD CONSTRAINT "Order_item_order_id_fkey" FOREIGN KEY (order_id) REFERENCES public."Order"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 Q   ALTER TABLE ONLY public."Order_item" DROP CONSTRAINT "Order_item_order_id_fkey";
       public          postgres    false    223    3513    225            �           2606    1082148    Order Order_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Order"
    ADD CONSTRAINT "Order_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 F   ALTER TABLE ONLY public."Order" DROP CONSTRAINT "Order_user_id_fkey";
       public          postgres    false    215    3501    223            �           2606    1082143    Review Review_course_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Review"
    ADD CONSTRAINT "Review_course_id_fkey" FOREIGN KEY (course_id) REFERENCES public."Course"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 J   ALTER TABLE ONLY public."Review" DROP CONSTRAINT "Review_course_id_fkey";
       public          postgres    false    221    3503    217            �           2606    1082138    Review Review_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Review"
    ADD CONSTRAINT "Review_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 H   ALTER TABLE ONLY public."Review" DROP CONSTRAINT "Review_user_id_fkey";
       public          postgres    false    221    3501    215            �           2606    1082163    Video Video_course_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Video"
    ADD CONSTRAINT "Video_course_id_fkey" FOREIGN KEY (course_id) REFERENCES public."Course"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 H   ALTER TABLE ONLY public."Video" DROP CONSTRAINT "Video_course_id_fkey";
       public          postgres    false    227    217    3503            �           2606    1082176 &   _User favorites _User favorites_A_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."_User favorites"
    ADD CONSTRAINT "_User favorites_A_fkey" FOREIGN KEY ("A") REFERENCES public."Course"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 T   ALTER TABLE ONLY public."_User favorites" DROP CONSTRAINT "_User favorites_A_fkey";
       public          postgres    false    3503    217    228            �           2606    1082181 &   _User favorites _User favorites_B_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."_User favorites"
    ADD CONSTRAINT "_User favorites_B_fkey" FOREIGN KEY ("B") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 T   ALTER TABLE ONLY public."_User favorites" DROP CONSTRAINT "_User favorites_B_fkey";
       public          postgres    false    3501    228    215            �           2606    1098137 &   _User purchases _User purchases_A_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."_User purchases"
    ADD CONSTRAINT "_User purchases_A_fkey" FOREIGN KEY ("A") REFERENCES public."Course"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 T   ALTER TABLE ONLY public."_User purchases" DROP CONSTRAINT "_User purchases_A_fkey";
       public          postgres    false    229    3503    217            �           2606    1098142 &   _User purchases _User purchases_B_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."_User purchases"
    ADD CONSTRAINT "_User purchases_B_fkey" FOREIGN KEY ("B") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 T   ALTER TABLE ONLY public."_User purchases" DROP CONSTRAINT "_User purchases_B_fkey";
       public          postgres    false    3501    229    215            b   :  x���]k�0���_!8B�%ݹ��
++d7�Qm%6u,c+-Y���,mp�`7��>z_(�l��s��؋b���e���أ����PoZP�_��[���^������F�0Mᦗ]U�����/ٖp�{�jSAS���e�:S���ea�B6.Tr�/�m�ug��U���T�Xj ϋ\�B��"�Y&������:�b$�ʦ\AL�!�\����V��½��>����R?���S�݅�N��3� 8�,^D��G[;�w���0��s13�Y@j7U������ˏ�.e�&�ň�ri.��Z�E�����L�"���#D���A��݀�K53����{7F�I���
'�=� L�����ы|�MU���=0���d��?�w��D��n��E߇؏��b^n� Wzm�d�@m�ù���N���Ρ$a`C�]��9�����$LDn͛�Gʎs�)f�!��Fe�AwQ�l�Qƪ��V�Q�I
����Sp�血L7ĦDB>+٬���hi5.�Ŝ��e�*i˕\+��^k���I�3;asr��_�q�?�%�      `   �  x�͖�n�0��ݧ8W\��v���]a\ B*�@��M��֮bg]��x^�'��hʪvc��*Rr�s����Qs"��(��Apɘ�E�	޽��B�O���)N��%T������E�J�:��	m5����୙EA����̪�鹚�;*m�8�"���~!W<�/��"޿��@2$���He�O�,��l ��ӄ���96^�i�`lg���85e�=������FA�FAU����-<��@���@�,I�th S��� /.�Y�Z�)|�-���$oᕱKMl��Y�A�vR��-5AJ���AJU���Fz���X7u��f�5��k.dƒ��1����ث��K��+�M��LխFF�VN;�:5����k5�4<�T߯����ux�x�@��%v��~��sɸ��Xq��`�-��x�q����{���X��b��a9��L3)�I�7NwYCk
^�ר��N��x�Xo�j\Hf1HU��*̕m��a�,��*�h�0kf+X�h@Ae��:�5�m����*�'�V~-������)��1w]0n^�\�}���p6e���{$�UU�s�|eV��!4[�X�0���:�:~Y�6	��h���U��0S����������q��;��A�&�?p�/n������H���{�]���C�]��9�}Lz��d�      f      x������ � �      h      x������ � �      d   �  x��RKn�0]Ϝ��1��I�9Ad�M�n���Ȣ����%5I���Ɛ�'��o���y8��p��^���;�N��O�G�2h�)#�)��~|��=�%�H�#,�XxR�ix�x4#�
���E(��E~�hv3(�׵�"�``Qk�R�B0Qq�*(w���Z
w�I��-K�i�04���/�~�o��c�����|�/]�i���6�LTB�D�.�B��d�M��"�Q"�T]2˷\��FJn�Q�S��Tj5c8�pb�!Ny���$Å�{�R�`ƿy�V�<�ԨE�pD������dF�n�G��F��e�|�����x�Ac,������3�U3���*F�����{� �F�!�.����{��]�:�&��%�=mw�Ӿ �. o�9��߫���]�}�f���n�
�r����f�C����fp�b�sa�r����4[Vr(���3����=G޺��ԏn�����Z�      ^   �   x����N�0  �sy
�\�B̄8d�p��C�x)�g�M)������?H]��ŋ�%�bо��S� :u�Y�Е�z�;��L����H��:AGx_E+ow
��w=/��^�#�Li��ׯz��x�M��L��tyD�8KɇG�dDI�A�	��kk"����C�`ӟ��e_��yin
�V,�,|�m�uhҏ8�Z��5�p��a�F'<v/�ЉZQ*/*amd�_�fj���i�xe�      j     x���[j� �g]��x9N�;��.�Pl"4��!���7���1	҂O���?J$��%�pc��\1����,�9�ƶ�쳻/+�}T�YIk����_%����w��#}��jﺆ��0��D�G@���6'䑐)��"�E$��h&t���7)����*�j�.�e��2�c`�zzJH��F�V��m犡*��,y^����)#���
ÔP)l|���S8��rܩ9���k�-�����D�?��N�,��*ER��=��`�'~��opaA�;�/c�5E/�      k      x�3�4�2�=... ��      l      x�3�4�2b ����� F     