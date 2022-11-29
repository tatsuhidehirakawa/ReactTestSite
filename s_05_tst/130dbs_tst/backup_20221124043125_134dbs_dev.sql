PGDMP                     
    z            postgres    14.6 (Debian 14.6-1.pgdg110+1)    14.6 (Debian 14.6-1.pgdg110+1) $    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    13757    postgres    DATABASE     \   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';
    DROP DATABASE postgres;
                postgres    false            �           0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    3320            �            1259    16399    account_attribute    TABLE       CREATE TABLE public.account_attribute (
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
       public         heap    postgres    false            �           0    0    TABLE account_attribute    COMMENT     B   COMMENT ON TABLE public.account_attribute IS 'account_attribute';
          public          postgres    false    209            �           0    0 #   COLUMN account_attribute.account_id    COMMENT     Y   COMMENT ON COLUMN public.account_attribute.account_id IS 'Account-ID:アカウントID';
          public          postgres    false    209            �           0    0 *   COLUMN account_attribute.self_introduction    COMMENT     U   COMMENT ON COLUMN public.account_attribute.self_introduction IS 'Self Introduction';
          public          postgres    false    209            �           0    0 $   COLUMN account_attribute.twitter_url    COMMENT     [   COMMENT ON COLUMN public.account_attribute.twitter_url IS 'Twitter URL:ツイッターID';
          public          postgres    false    209            �           0    0 %   COLUMN account_attribute.facebook_url    COMMENT     c   COMMENT ON COLUMN public.account_attribute.facebook_url IS 'Facebook URL:フェイスブックID';
          public          postgres    false    209            �           0    0 &   COLUMN account_attribute.instagram_url    COMMENT     e   COMMENT ON COLUMN public.account_attribute.instagram_url IS 'Instagram URL:インスタグラムID';
          public          postgres    false    209                        0    0 (   COLUMN account_attribute.youtube_channel    COMMENT     [   COMMENT ON COLUMN public.account_attribute.youtube_channel IS 'YouTube Channel:YouTubeID';
          public          postgres    false    209                       0    0 $   COLUMN account_attribute.update_date    COMMENT     S   COMMENT ON COLUMN public.account_attribute.update_date IS 'Update Date:更新日';
          public          postgres    false    209                       0    0 "   COLUMN account_attribute.update_id    COMMENT     O   COMMENT ON COLUMN public.account_attribute.update_id IS 'update id:更新者';
          public          postgres    false    209                       0    0 "   COLUMN account_attribute.pic_id_01    COMMENT     b   COMMENT ON COLUMN public.account_attribute.pic_id_01 IS 'Picture ID 1:プロフィール写真1';
          public          postgres    false    209                       0    0 "   COLUMN account_attribute.pic_id_02    COMMENT     b   COMMENT ON COLUMN public.account_attribute.pic_id_02 IS 'Picture ID 2:プロフィール写真2';
          public          postgres    false    209                       0    0 "   COLUMN account_attribute.pic_id_03    COMMENT     b   COMMENT ON COLUMN public.account_attribute.pic_id_03 IS 'Picture ID 3:プロフィール写真3';
          public          postgres    false    209                       0    0    COLUMN account_attribute.skill    COMMENT     G   COMMENT ON COLUMN public.account_attribute.skill IS 'skill:スキル';
          public          postgres    false    209            �            1259    16404    account_master    TABLE     �  CREATE TABLE public.account_master (
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
       public         heap    postgres    false                       0    0    TABLE account_master    COMMENT     <   COMMENT ON TABLE public.account_master IS 'account_master';
          public          postgres    false    210                       0    0    COLUMN account_master.user_id    COMMENT     J   COMMENT ON COLUMN public.account_master.user_id IS 'User ID:ユーザID';
          public          postgres    false    210            	           0    0 "   COLUMN account_master.account_name    COMMENT     O   COMMENT ON COLUMN public.account_master.account_name IS 'Account Name:氏名';
          public          postgres    false    210            
           0    0 "   COLUMN account_master.mail_addless    COMMENT     ^   COMMENT ON COLUMN public.account_master.mail_addless IS 'Mail Addless:メールアドレス';
          public          postgres    false    210                       0    0    COLUMN account_master.password    COMMENT     P   COMMENT ON COLUMN public.account_master.password IS 'Password:パスワード';
          public          postgres    false    210                       0    0    COLUMN account_master.zip_code    COMMENT     M   COMMENT ON COLUMN public.account_master.zip_code IS 'Zip Code:郵便番号';
          public          postgres    false    210                       0    0     COLUMN account_master.barth_date    COMMENT     N   COMMENT ON COLUMN public.account_master.barth_date IS 'Barth Date:誕生日';
          public          postgres    false    210                       0    0    COLUMN account_master.time_zone    COMMENT     U   COMMENT ON COLUMN public.account_master.time_zone IS 'Time Zone:タイムゾーン';
          public          postgres    false    210                       0    0    COLUMN account_master.language    COMMENT     G   COMMENT ON COLUMN public.account_master.language IS 'Language:言語';
          public          postgres    false    210                       0    0    COLUMN account_master.status    COMMENT     L   COMMENT ON COLUMN public.account_master.status IS 'Status:ステータス';
          public          postgres    false    210                       0    0 '   COLUMN account_master.registration_date    COMMENT     \   COMMENT ON COLUMN public.account_master.registration_date IS 'Registration Date:登録日';
          public          postgres    false    210                       0    0    COLUMN account_master.rate    COMMENT     ?   COMMENT ON COLUMN public.account_master.rate IS 'Rate:評価';
          public          postgres    false    210            �          0    16399    account_attribute 
   TABLE DATA           �   COPY public.account_attribute (account_id, self_introduction, twitter_url, facebook_url, instagram_url, youtube_channel, update_date, update_id, pic_id_01, pic_id_02, pic_id_03, skill) FROM stdin;
    public          postgres    false    209   p&       �          0    16404    account_master 
   TABLE DATA           �   COPY public.account_master (user_id, account_name, mail_addless, password, zip_code, barth_date, time_zone, language, status, registration_date, rate) FROM stdin;
    public          postgres    false    210   �*       c           2606    16410 '   account_attribute account_attribute_pkc 
   CONSTRAINT     m   ALTER TABLE ONLY public.account_attribute
    ADD CONSTRAINT account_attribute_pkc PRIMARY KEY (account_id);
 Q   ALTER TABLE ONLY public.account_attribute DROP CONSTRAINT account_attribute_pkc;
       public            postgres    false    209            e           2606    16412 !   account_master account_master_pkc 
   CONSTRAINT     d   ALTER TABLE ONLY public.account_master
    ADD CONSTRAINT account_master_pkc PRIMARY KEY (user_id);
 K   ALTER TABLE ONLY public.account_master DROP CONSTRAINT account_master_pkc;
       public            postgres    false    210            �   /  x���mO�V�חO�/P��8����IZy(�T�J�M��7Nlc_'q^��Uy
C���Ct�f��u+�+0�aNȫ~�����KN�HW���νq��I.������w��뿁� k{	O|�Qj9w��h�P�ڃY�<DͲ�vm�Ot��%�ju�3]�f��2�Q����VJf!�Ę(މ)wD�X�n�B�
���BP%)S��[Ȓql��V��rk��`K���󓟀����d�x�K�''�6�������S6��3$~�7���:u_��r�s�`��� �B���R-�T
6�&�����MI5�s�]^��q#l|n�u��`g�ț�8_�
�6�����it��v��vڲ��tb�:։Jꤏ-��8Vk�rE+Aj�(�j-���݋��pa���ۭV��ǅon�<�]>��1���a�sK�P��ț}xY�Zz8Z�.ܟ��f���l\�N	�t��2��٩$F����7�lѓ�sN
��ۺl���=<a�����F�coM5��{�F��F6��eL7��%�:�L�h��%P]֩���r��OB�"�e⸨��ƃl�7�:�/���/�"��W}�[���?���7�k�$�~�k�}���:���KxH7m���j}�I��%��Q�I��l٩z��$��pn��]����a���/F�yR�3��y�st`�6�9��))�p��K��!:���}�)�œX�,��J���di	��4�A�kr�Axz���/�³����˂o����W��{v�!�0&~;�=�j=���@,E����G�3��rj�4�I�tnd��ͼN;N+Q�x�*��R"֒��:+G]��.x�Ǹ��M��*��һ��{*�鈭b}�a�'�*6FM�iSb�L2��T@��YY��A$YՊ�A�x�����z�sޫ=g|����il_�]��k����*������Q�)���3Xwy���NNRaة�͚��xT�H|_�B���T�EB5��j9#�4�h*��O�g���9�B��ې6��r�埈�`����>͋�e�����^\E�xp``� T      �   k   x�3M��+2K�N�4.�tL��̃����9�z�����&�Y�UyF��Fƺ&�f�FFF���朎ř��!�ٕ��^��y�ũ��H
���3Ə+F��� �0^     