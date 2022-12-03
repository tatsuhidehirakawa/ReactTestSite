PGDMP     .                 
    z            postgres    14.6 (Debian 14.6-1.pgdg110+1)    14.6 (Debian 14.6-1.pgdg110+1) 5    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    13757    postgres    DATABASE     \   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';
    DROP DATABASE postgres;
                postgres    false                        0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    3327            �            1259    16406    account_attribute    TABLE       CREATE TABLE public.account_attribute (
    account_id character varying(100) NOT NULL,
    self_introduction character varying(1000),
    twitter_url character varying,
    facebook_url character varying,
    instagram_url character varying,
    youtube_channel character varying,
    update_date timestamp without time zone NOT NULL,
    update_id character varying NOT NULL,
    pic_id_01 character varying NOT NULL,
    pic_id_02 character varying,
    pic_id_03 character varying,
    skill character varying(1000) NOT NULL
);
 %   DROP TABLE public.account_attribute;
       public         heap    postgres    false                       0    0    TABLE account_attribute    COMMENT     B   COMMENT ON TABLE public.account_attribute IS 'account_attribute';
          public          postgres    false    210                       0    0 #   COLUMN account_attribute.account_id    COMMENT     Y   COMMENT ON COLUMN public.account_attribute.account_id IS 'Account-ID:アカウントID';
          public          postgres    false    210                       0    0 *   COLUMN account_attribute.self_introduction    COMMENT     U   COMMENT ON COLUMN public.account_attribute.self_introduction IS 'Self Introduction';
          public          postgres    false    210                       0    0 $   COLUMN account_attribute.twitter_url    COMMENT     [   COMMENT ON COLUMN public.account_attribute.twitter_url IS 'Twitter URL:ツイッターID';
          public          postgres    false    210                       0    0 %   COLUMN account_attribute.facebook_url    COMMENT     c   COMMENT ON COLUMN public.account_attribute.facebook_url IS 'Facebook URL:フェイスブックID';
          public          postgres    false    210                       0    0 &   COLUMN account_attribute.instagram_url    COMMENT     e   COMMENT ON COLUMN public.account_attribute.instagram_url IS 'Instagram URL:インスタグラムID';
          public          postgres    false    210                       0    0 (   COLUMN account_attribute.youtube_channel    COMMENT     [   COMMENT ON COLUMN public.account_attribute.youtube_channel IS 'YouTube Channel:YouTubeID';
          public          postgres    false    210                       0    0 $   COLUMN account_attribute.update_date    COMMENT     S   COMMENT ON COLUMN public.account_attribute.update_date IS 'Update Date:更新日';
          public          postgres    false    210            	           0    0 "   COLUMN account_attribute.update_id    COMMENT     O   COMMENT ON COLUMN public.account_attribute.update_id IS 'update id:更新者';
          public          postgres    false    210            
           0    0 "   COLUMN account_attribute.pic_id_01    COMMENT     b   COMMENT ON COLUMN public.account_attribute.pic_id_01 IS 'Picture ID 1:プロフィール写真1';
          public          postgres    false    210                       0    0 "   COLUMN account_attribute.pic_id_02    COMMENT     b   COMMENT ON COLUMN public.account_attribute.pic_id_02 IS 'Picture ID 2:プロフィール写真2';
          public          postgres    false    210                       0    0 "   COLUMN account_attribute.pic_id_03    COMMENT     b   COMMENT ON COLUMN public.account_attribute.pic_id_03 IS 'Picture ID 3:プロフィール写真3';
          public          postgres    false    210                       0    0    COLUMN account_attribute.skill    COMMENT     G   COMMENT ON COLUMN public.account_attribute.skill IS 'skill:スキル';
          public          postgres    false    210            �            1259    16411    account_master    TABLE     �  CREATE TABLE public.account_master (
    user_id character varying(64) NOT NULL,
    account_name character varying(20) NOT NULL,
    mail_addless character varying NOT NULL,
    password character varying(64) NOT NULL,
    zip_code character varying NOT NULL,
    barth_date date NOT NULL,
    time_zone character varying NOT NULL,
    language character varying NOT NULL,
    status character varying(1) NOT NULL,
    registration_date timestamp without time zone NOT NULL,
    rate character varying
);
 "   DROP TABLE public.account_master;
       public         heap    postgres    false                       0    0    TABLE account_master    COMMENT     <   COMMENT ON TABLE public.account_master IS 'account_master';
          public          postgres    false    211                       0    0    COLUMN account_master.user_id    COMMENT     J   COMMENT ON COLUMN public.account_master.user_id IS 'User ID:ユーザID';
          public          postgres    false    211                       0    0 "   COLUMN account_master.account_name    COMMENT     O   COMMENT ON COLUMN public.account_master.account_name IS 'Account Name:氏名';
          public          postgres    false    211                       0    0 "   COLUMN account_master.mail_addless    COMMENT     ^   COMMENT ON COLUMN public.account_master.mail_addless IS 'Mail Addless:メールアドレス';
          public          postgres    false    211                       0    0    COLUMN account_master.password    COMMENT     P   COMMENT ON COLUMN public.account_master.password IS 'Password:パスワード';
          public          postgres    false    211                       0    0    COLUMN account_master.zip_code    COMMENT     M   COMMENT ON COLUMN public.account_master.zip_code IS 'Zip Code:郵便番号';
          public          postgres    false    211                       0    0     COLUMN account_master.barth_date    COMMENT     N   COMMENT ON COLUMN public.account_master.barth_date IS 'Barth Date:誕生日';
          public          postgres    false    211                       0    0    COLUMN account_master.time_zone    COMMENT     U   COMMENT ON COLUMN public.account_master.time_zone IS 'Time Zone:タイムゾーン';
          public          postgres    false    211                       0    0    COLUMN account_master.language    COMMENT     G   COMMENT ON COLUMN public.account_master.language IS 'Language:言語';
          public          postgres    false    211                       0    0    COLUMN account_master.status    COMMENT     L   COMMENT ON COLUMN public.account_master.status IS 'Status:ステータス';
          public          postgres    false    211                       0    0 '   COLUMN account_master.registration_date    COMMENT     \   COMMENT ON COLUMN public.account_master.registration_date IS 'Registration Date:登録日';
          public          postgres    false    211                       0    0    COLUMN account_master.rate    COMMENT     ?   COMMENT ON COLUMN public.account_master.rate IS 'Rate:評価';
          public          postgres    false    211            �            1259    16399    offer_master    TABLE     "  CREATE TABLE public.offer_master (
    offer_id character varying NOT NULL,
    user_id character varying NOT NULL,
    offer_type character varying NOT NULL,
    offer_title character varying NOT NULL,
    offer_severity character varying,
    offer_catagory character varying,
    offer_locktion character varying,
    offer_pic_1 character varying NOT NULL,
    offer_pic_2 character varying,
    offer_pic_3 character varying,
    offer_pic_4 character varying,
    offer_pic_5 character varying,
    offer_text character varying NOT NULL
);
     DROP TABLE public.offer_master;
       public         heap    postgres    false                       0    0    TABLE offer_master    COMMENT     K   COMMENT ON TABLE public.offer_master IS 'offer_master:オファー台帳';
          public          postgres    false    209                       0    0    COLUMN offer_master.offer_id    COMMENT     M   COMMENT ON COLUMN public.offer_master.offer_id IS 'Offer ID:オファーID';
          public          postgres    false    209                       0    0    COLUMN offer_master.user_id    COMMENT     H   COMMENT ON COLUMN public.offer_master.user_id IS 'User ID:ユーザID';
          public          postgres    false    209                       0    0    COLUMN offer_master.offer_type    COMMENT     U   COMMENT ON COLUMN public.offer_master.offer_type IS 'Offer Type:オファー種別';
          public          postgres    false    209                       0    0    COLUMN offer_master.offer_title    COMMENT     W   COMMENT ON COLUMN public.offer_master.offer_title IS 'Offer Title:オファー題目';
          public          postgres    false    209                       0    0 "   COLUMN offer_master.offer_severity    COMMENT     `   COMMENT ON COLUMN public.offer_master.offer_severity IS 'Offer Severity:オファー優先度';
          public          postgres    false    209                        0    0 "   COLUMN offer_master.offer_catagory    COMMENT     f   COMMENT ON COLUMN public.offer_master.offer_catagory IS 'Offer Catagory:オファー・カテゴリ';
          public          postgres    false    209            !           0    0 "   COLUMN offer_master.offer_locktion    COMMENT     ]   COMMENT ON COLUMN public.offer_master.offer_locktion IS 'Offer Locktion:オファー場所';
          public          postgres    false    209            "           0    0    COLUMN offer_master.offer_pic_1    COMMENT     X   COMMENT ON COLUMN public.offer_master.offer_pic_1 IS 'Offer Pic 1:オファー写真1';
          public          postgres    false    209            #           0    0    COLUMN offer_master.offer_pic_2    COMMENT     X   COMMENT ON COLUMN public.offer_master.offer_pic_2 IS 'Offer Pic 2:オファー写真2';
          public          postgres    false    209            $           0    0    COLUMN offer_master.offer_pic_3    COMMENT     X   COMMENT ON COLUMN public.offer_master.offer_pic_3 IS 'Offer Pic 3:オファー写真3';
          public          postgres    false    209            %           0    0    COLUMN offer_master.offer_pic_4    COMMENT     X   COMMENT ON COLUMN public.offer_master.offer_pic_4 IS 'Offer Pic 4:オファー写真4';
          public          postgres    false    209            &           0    0    COLUMN offer_master.offer_pic_5    COMMENT     X   COMMENT ON COLUMN public.offer_master.offer_pic_5 IS 'Offer Pic 5:オファー写真5';
          public          postgres    false    209            '           0    0    COLUMN offer_master.offer_text    COMMENT     R   COMMENT ON COLUMN public.offer_master.offer_text IS 'Offer Text:オファー文';
          public          postgres    false    209            �          0    16406    account_attribute 
   TABLE DATA           �   COPY public.account_attribute (account_id, self_introduction, twitter_url, facebook_url, instagram_url, youtube_channel, update_date, update_id, pic_id_01, pic_id_02, pic_id_03, skill) FROM stdin;
    public          postgres    false    210   9       �          0    16411    account_master 
   TABLE DATA           �   COPY public.account_master (user_id, account_name, mail_addless, password, zip_code, barth_date, time_zone, language, status, registration_date, rate) FROM stdin;
    public          postgres    false    211   CH       �          0    16399    offer_master 
   TABLE DATA           �   COPY public.offer_master (offer_id, user_id, offer_type, offer_title, offer_severity, offer_catagory, offer_locktion, offer_pic_1, offer_pic_2, offer_pic_3, offer_pic_4, offer_pic_5, offer_text) FROM stdin;
    public          postgres    false    209   1I       i           2606    16417 '   account_attribute account_attribute_pkc 
   CONSTRAINT     m   ALTER TABLE ONLY public.account_attribute
    ADD CONSTRAINT account_attribute_pkc PRIMARY KEY (account_id);
 Q   ALTER TABLE ONLY public.account_attribute DROP CONSTRAINT account_attribute_pkc;
       public            postgres    false    210            k           2606    16419 !   account_master account_master_pkc 
   CONSTRAINT     d   ALTER TABLE ONLY public.account_master
    ADD CONSTRAINT account_master_pkc PRIMARY KEY (user_id);
 K   ALTER TABLE ONLY public.account_master DROP CONSTRAINT account_master_pkc;
       public            postgres    false    211            g           2606    16405    offer_master offer_master_pkc 
   CONSTRAINT     a   ALTER TABLE ONLY public.offer_master
    ADD CONSTRAINT offer_master_pkc PRIMARY KEY (offer_id);
 G   ALTER TABLE ONLY public.offer_master DROP CONSTRAINT offer_master_pkc;
       public            postgres    false    209            �     x��Z[S�X�~�ż�������*j�\zf�&��L�ɤ�ʵ-m�¶�dn����+��I �+!7�Iȏ������6;1)Μ�
�b˲ַ���o���c�1C�q�����])��9߳�;`�.�#��e9�詡�a2,����������3��p�8���_��!�=���W���9.v-2`n�g�n`V$8�䘀��O�"�q>���u��HVeIA����#}9�d��02v &���TL七8���r�N6�Ed9�"G:HL-��篢AV�N�s׼�Bef�+��?�����g�0���^�
�^�ο?��oaɋ{�r�́��Ȑ�w�q����i����޿
?�>sj�T6ڛ93tD0��6V@i��.�L��,�72�X��Y���87����gr�f�.1]6��XXwX�C*�I�_��)&p4B0�ǅ��;;`�
/��W����+Ly��W���6���]^N}���K��Y�W�\�)�D,�b��Ǳ���V�!6��4�Yf_n��fl��������i���^�5�8V�Ybc&k��k�L.e��ᙬa������7��s��E�������H���ȹ.�t�+��J7��#�t�+~�JS^iic�Ipu�m"!�������kF!�b��68N�#b�5�8I�&	��!>�����Í�Q���]����e�7���2��v���b����N8R�Wz�9&�aUcCy'�&_C�M[6�Z�e�
��􎼉g���MF��1C�a
���Y��(��H&X��(PQ4�'���q�G�R\�j��z�|kzcmP��������,?�'�h���m|��r�����z��^�i�_C�ў��o$Oko}�_Zގaڰ'�1Y�6�-ӊd�n9)+GMl֢SK(���-V�� �g��`!뒆�3,RX1��_�]�"F���z��תM 얠*�ҘWz���O����zy�Uu�̸�c�۳�({���,���$�xv��(}1����P��2	L�?�]y|���K�����X�X�|�=@� �e+i1�L#��K��7�V�:���SҎ�����<	���Y��D�"M�\b+����WX�7��Kz\�L�/߅b{Y�y�+L��7^ޗ�tu��k��(l�,v0C�k"mW���*�FcN}����5���8 
����񊗶�{����B�V'؜�*��'����R�v�,�7�,�Ia%U�p�a���+��c���\�L��R,^��o�Xa�ƫͭ�T�G��kc[��Y���B��g��y� ʃ��|S8IHD2�j"㹭ۯ�B�z.�R�<�e�J�PWy�U���gU}�&8}�篪�	�`�e�J�����8u�[3af�26�}���a�H�˲�#Z���	�1}U�M�啚��Ͻ������n��h[ч�
u� ��/}	*�Je��_��= �����9$����"k�QMY�)L���0�E��ô�9�8�DoC8�n{�TP��f�����K꘩�߯���7
��2|S�"��QGNjD�������!���`S#vX�6�U�N��}V܁��R��1 ���22zL�IZ��"X��C�&MD�؆e�i���P1^{�^q�+>����T^�4��Gо�JR�(���&�W��x$���pq
RیE��$9��juߠ���R	�N����>S�"ǿUA�+6Zs�;D���`�AHݩ n� �Moo:��I:|�Q=��7 ���7�"44Ͻ�{��ڲ��*�[R6Vǂ{�*mUp�0����6+
�RK����B\�
*R�L�\MFò�EZ��&U]^~���C������_SS�rq������=������4t;z:���X�~��i���I#�Sx��2���)8�OL
N�H[y�\�>��� ������������^i"������&&���[q�5`��WW��b��Z�rC}L��l��B��DI�	���P/�+�  ��a���� ����������Q���f=ߪO��K��:?,�bj���4�|��Dm<�e3�Ib�$"E�AxE��-l?����p��8�.޷�Qs��M���40t :��Η;�"IJ#�EB�WzL�)�V_�˟��	��l�@:֝/���D�6��[W�K+og��~K�EF���ezV�β�p}��u�3mG�3����,Xx�E3-c����K'������s;Sс����ڔ�$�`��)��BCF�f�%�'n���{����<�3g[5�]�չ���`��Y=�]0+x������)���y�_�J��A�$	t	���/f+�l�Q��Бn�p�Q��W��=�}��C��UT�TP���m֪��Ց ޸\^}z�[�����©����J�t�Z\�3#�p�n���'N����?r��������3C(�V���h�4|���Idi�4���o���-m������_7V?l|�И��Wƃ�jeɿ �}ۿ: UfW/=���ɑ�)��z�^�����i�n�<{Q}0ZY�Y�:6t�	m��u��6G�!A
��(C烵�������/�rX%��a�5m[�迻��q����Js`@��F|��m6oH�"R�E/Bհ֩-��}���-���!��.�XI�l�jUe��,C'���e3��ԐT0���mE��ʗ�0u�,��;ۼ�H�J*mRyqɟ��4 �cM�&V��	t��P��������2C���_��v��ѱ�S�9���N�J���I`x'��_���h�d'm#�2q�����D���qTR�Z\�uA�^�%�K�J��x���d}��ݍ���w�����;�����c��(�����K��;�����p�c砝r���;��;�����"ư�:�eR�k	�q������8�D�ͺ�溿p��rr=[��J�SW|���n��ԣ��!e��8�c{��d �]�$�Aeaſ�h���a�e�:�L�n��-�E|���6w��aY�z�IkF@{��o��n]��:Y�&Xzc0MB�[�,g�8&KH������_��}�h�]?�&�{��¾�@���1�1�=�T>�GЁ����@�ί{2�N�6�f��:5�O�5��=6���a�����k��h�gÎC��8j��CX��i:0�3諱�C��q�M{۳�Ե9/,.uN(���C���5̄�1:ɟ��N:s�Gt�{���8��?�D'l��f�'v��2�� E~A����R$k`sg1�0�8N�2�[o��=���L7eV�S����|��U�"�4��m���}lkV6j;(�����g�!�v��1����d�`��)�LwU��S�:���ƭQQ���J�>=翿�}M5݌8�C��5l�d`3�A4��Ƭi��"��aE8�Ϲ�hn��x��y����Ȉ�x���<�_oͥ"���{��cՕ�M�P�(��z�B�9 �!Դ�urX#��ɒ$Ȋ*(�%U��
FD�� �&H2'D��D$��o�.\��/R��N�Ε>��4�w�R��l��}����o��S�vR8�!����2"���l�}f�K�����A�k�ۤ��>�	�
.��򖘠�GL�vM'15{(��q�&In��^����k��}�q]�����
?���N�����F����~�N����M����y��\���p�j��m6^o���_���n�W�
��u<���M�ݞ�%��-S�n|a���>#	��7���5�@���������tf���eR8��$Ŏ��a��J-F���|��w�F.�      �   �   x��Խ
�0����@�����.N�B	6��6-���E��`�n����p�jq�Ĉ�����đ�u!ƛ��lv�YR �َ��@�RC}�T�'�j�`�k.�vF��ۃ��j���䲒q�D��9MT���3�.<�Y��-�]�q٠�}���u4����v5����X� �����ȾF��ˁF�ˡFM������o�o�zlY��<��      �   �   x�+-.*��L�751�,��̀��"ΐ��Ό���?Χ��w.���3)+#=';'+$G �\0#,Q�+(�/�L�����d�䗃�ݴ��� s+R*�Ӓ3 ֡���e�j�Wd���hi\�d�!^�7�?m�|�;�i�.�D��Ҫ<#\��qqq ��b'     