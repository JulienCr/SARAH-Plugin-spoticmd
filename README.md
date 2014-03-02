SARAH-Plugin-spoticmd
=====================

Sarah plugin for Spotify control

Fonctionnalités
----
Version 0.1
* Play / pause
* Suivant / Précédent
* Jouer une playlist
* Rechercher et jouer une chanson particlulière
* Rechercher et jouer des chansons d'un artiste en particulier

Pré-requis
-----------
* Bénéficier d'un compte développeur Spotify (gratuit)

Installation
-----------
Spoticmd fonctionne avec un plugin Spotify. Il est pour le moment obligatoire de Bénéficier d'un compte développeur Spotify

1. Téléchargez et installer le plugin pour SARAH.
1. Activer le compte développeur Spotify. https://devaccount.spotify.com/my-account/
1. Télécharger l'app Sarah-Spoticmd pour Spotify - https://github.com/JulienCr/sarah-spoticmd/archive/master.zip.
1. Décompresser l'archive dans %homepath%/documents/Spotify/sarah-spoticmd

Configuration
-------
Le plugin permet de jouer les playlists que vous souhaitez. Pour ce faire, il faut éditer le fichier spoticmd.xml.

1. Indiquer le nom de la playlist que vous demandez.
1. Dans Spotify, dans la liste de gauche, sur la playlist, faites clic-droit > Copier l'URI Spotify.
1. Valorisez la variable out.action.playlist avec l'ID de la playlist Spotify précédemment copiée 
(ex spotify:user:juliencr:playlist:4KAmGsiF9ei65FtJ5M8ArD

Exemples vocaux
--------------
* Sarah, met de la musique.
* Sarah, coupe la musique.
* Sarah, morceau suivant.
* Sarah, remet le morceau précédent.
* Sarah, joue une chanson de Stromae.
* Sarah, joue la chanson La vie en rose.
* Sarah, met la playlist Chanson française.
    
