PGDMP     .                    z            postgres    14.6 (Debian 14.6-1.pgdg110+1)    14.6 (Debian 14.6-1.pgdg110+1) 5    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    13757    postgres    DATABASE     \   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';
    DROP DATABASE postgres;
                postgres    false                        0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    3327            �            1259    16449    account_attribute    TABLE       CREATE TABLE public.account_attribute (
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
          public          postgres    false    210            �            1259    16454    account_master    TABLE     �  CREATE TABLE public.account_master (
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
          public          postgres    false    209            �          0    16449    account_attribute 
   TABLE DATA           �   COPY public.account_attribute (account_id, self_introduction, twitter_url, facebook_url, instagram_url, youtube_channel, update_date, update_id, pic_id_01, pic_id_02, pic_id_03, skill) FROM stdin;
    public          postgres    false    210   9       �          0    16454    account_master 
   TABLE DATA           �   COPY public.account_master (user_id, account_name, mail_addless, password, zip_code, barth_date, time_zone, language, status, registration_date, rate) FROM stdin;
    public          postgres    false    211   EH       �          0    16399    offer_master 
   TABLE DATA           �   COPY public.offer_master (offer_id, user_id, offer_type, offer_title, offer_severity, offer_catagory, offer_locktion, offer_pic_1, offer_pic_2, offer_pic_3, offer_pic_4, offer_pic_5, offer_text) FROM stdin;
    public          postgres    false    209   3I       i           2606    16460 '   account_attribute account_attribute_pkc 
   CONSTRAINT     m   ALTER TABLE ONLY public.account_attribute
    ADD CONSTRAINT account_attribute_pkc PRIMARY KEY (account_id);
 Q   ALTER TABLE ONLY public.account_attribute DROP CONSTRAINT account_attribute_pkc;
       public            postgres    false    210            k           2606    16462 !   account_master account_master_pkc 
   CONSTRAINT     d   ALTER TABLE ONLY public.account_master
    ADD CONSTRAINT account_master_pkc PRIMARY KEY (user_id);
 K   ALTER TABLE ONLY public.account_master DROP CONSTRAINT account_master_pkc;
       public            postgres    false    211            g           2606    16405    offer_master offer_master_pkc 
   CONSTRAINT     a   ALTER TABLE ONLY public.offer_master
    ADD CONSTRAINT offer_master_pkc PRIMARY KEY (offer_id);
 G   ALTER TABLE ONLY public.offer_master DROP CONSTRAINT offer_master_pkc;
       public            postgres    false    209            �     x��Z[S�X�~�ż�������*j�\zf�&��L�ɤ�ʵ-m�¶�dn����+��I �+!7�Iȏ������l;1)Μ�[e˲ַ���o���c�1C�q�����])��9߳�;`�.�#��e9�詡�a2,��������x��N`8��}�ׅ8xn��+���b�z��]C���#z�,�̊'�Bq]�	Q$1��Uq��9ɪ,)���|�/G�l?bF&��d�;���wgb��_cQ�`��Ƹ�,�P����C���p޵��U4���i�7R��Lz����w^q<���F����٫^a�+�����w�M,yqoXn�900��n>N³�6M�a>��W���gN��F{3g���O��ޭP�V@`�|s��Z��Y���87����gr�f�.1]6��XXwX�C*�I�_��)&p4B0�ǅ��;;`�
/��W����+Ly��W���6���]^N}���K��Y�W�\�)�D,�b��Ǳ���V�!6��4�Yf_�����B36��������҆�U^���E��,�1��Lõl&��L��L�0C|����ς�9����i���`|���Fe�\�W:�^y�^�W��?{�)�����$�:�6��O��t���I�5��M��W�
'y��1��Y�$k��eg��`�ve����(���ˮ������?�����_��X�Xyy��rc}'����+=�۰�����O�����-��-�2b��nzG��3V��&#I˂�!�0ca謀�h��u$,jz��(�X��8�Q).i��y�\�5���(WF�o�[^vU��K����6>MC�y���߿��g��c��R��!�hO`�7�������/-o�0m؆�Ș,NÖiE�X������&����$,}�UE)<��61XȺ�a��V�r��r���M�^~��j �%�J�4�^���ࡼ�^y�D]�x 3��X����#�^8�m7�06�a�]+�!J_�� 4��L��oW��:��ҷ;���6V/V'm�4�e�JZ1����#m��U����𔴣,���8OD��BB�DA�tE��:Q�H�(�،�2��������������w��^�o��
-ꍗ�%�(]ݩ�ho6I;�!�5��+�GyE�1����o�����	� ����x�K��^K�m!}�l�X������^l)g�F��eI������N8�0a��^a@���1|c}�}
�Vi)��p߷[���G����i*�#c����[��1��Px��$h�9���� |4�NF�����xn�������*/A�R:�U�9���@U�	N����*wB#�<l��R���-�8�B�֌CA����o_?}x%R����Ĉ���z|E_�8�λ�Rs���W��7>ޭ<m+�PZ��DP��/�C_���k��d�\x=���Q/���ՔE@����	��Q$��?L�����A�6�#^�WzA�^a��P*OA����
��j����.��7E-r�u�᤭�C�X|�_��=d�lj��Ц�
�IS�ϊ;�QZ��2��RFF�i�>I�bS��u(פɂ�۰��?*�k�t�+.{�'4��������ｒT�ʯ(D�����38�a�21\���6#B��8I��g�Z�o��re�xT��C�c���k��ߪ�����"B�Jf�� ��T7E��٦���=o҅�gԈh�Hdn����s���9���&|�J�ձ��æ
F��5+c}���ŊB��(�Fd�ı�����x"�(W�Ѱ�e��5�ɭ�./�	FW!�����ϯ�)o��|t_b�x���xq�h���)#ݎ���?���=u�` �@�H�^e����z;p
N����7�V,W��`8$1���AEn�������|���W���z0� 4�VǤ�6+�L]��?Q,�\k\n������_��(	#"�<�ez��X=���r�p4�!zc�_r��0�9��լ�[��yy�>U�'��]L�T9��o4���畣l�0IL�D���"(�H�沅m��p��">�����V=j�2ԣ������Dg���r�B�U$Iيh��P���p
�՗��gi��;�&��u狁�C��;�6��Ml&�������#A��F�l����F���Un�l�\�heB�Lۑ�L0y�+<�n�L�����&��ɻD�z�z����Tt���8F��R�d�L1<e�Yh��(���D�m��wO�����g�l��\��za�:w�s4�睴f�_5�?�<��9O�K[)�=(t�$�.����l���>*v:ҭ�>*w�JݽG����}�p��j�
�S��f�Z�X)����է�W�U���N����W�S��J��8�w�u<�8q�E�N��3�O����BɶRdF�y��d�:��q��v�=�*�3��a&C��S��X������d��2���P+K� ����y �2��z避P�N�4Oy�.���+^�
�7~O��p�ً������
Ա�[Lh۵�÷�9rȖ	R��W|D�8�-Wf��f�(|����*�o�iۺD��]����g��W��}7��޼!����-z���Nm!�w��$��h���]u�Jf;�P��(��g:�g.��Ǡ-Ic���:�Vd8��|i�Q�ʒX��͛>��g����!����kMP:1�4hb5��@�Z%��/�N K�+3�J���mǾ�>���C�;���1�T9���p"�j�vO�q�6"�!�_\N�MDyM!G%%��e^TL�%MQ�$��� ���O�7>���|�zg��_�C��J�A�^�<揎�:z~?�Th��������ڼ��>v�)ۉ��c9�����0X*b-�[&�����JY�K�퍃M�جn��g�+w!׃�Ś��;uŷ^�>x���JM=��1��V{lo���+�2�,�����"#e�`٠�-�8���pKf_k���]!nXVx��yҚ������[���NֲI��G���1��.���x��b��c<����흡��$v�1@�H�@�03F�'�����:0�����uO���f����_W�&�����Fv��U���:/'K��|��f����O�c'�9�#:s�=|FL�D��Z�6K3P%;w> �a��"	�� �Zl��[)�5�9���u�ۓ����[�c�7>,�-�����oa~=-߂�j��'Ml�P�&R�.�uM	���p�����3�U;�r���Grf�k0��b��*o�K����֨�h���J�:=翿�}M5݌8�C7�5l�d��Ӂ2��Ƭi��w
�"����aE8�ϹZin��x��y�z��Ȉ�xnk�cy4��ޚID���w�7VǪ+�ƀQ�!���,$�bBM�<'�5Ҋ��,I������XR娨`D-�	�.k�$sBTKHD"��AY���	��
��t��_��p�s��GF{��kf���o��S�v*&��f�QK�p��b=�z��Bj�=A�Z�6� ��^�χ�!P���p<�����Ю�"�f�\�3n��"�m?^���w��=�����W�'��Ӊ>��_���h�����ک�Z±�ptP8�{ ����9�n�AMS֣V�u}�����t��WXm���Z� ���X�}X��4���L�SyNRQ���+&t��k�/� ���K�Ѷ-Wf��u�v�I�n��)���1��8���-]m�Q�m�KGz��M��e�T�L.�7��s9�Չ�����	�?�Q=���"�g���s%�      �   �   x��Խ
�0����@�����.N�B	6��6-���E��`�n����p�jq�Ĉ�����đ�u!ƛ��lv�YR �َ��@�RC}�T�'�j�`�k.�vF��ۃ��j���䲒q�D��9MT���3�.<�Y��-�]�q٠�}���u4����v5����X� �����ȾF��ˁF�ˡFM������o�o�zlY��<��      �   A   x�3M��+2K�N�4.�4E��e��q���(����1~P�h��UZ�g�"�B�=... F�{     