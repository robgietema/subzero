#!/usr/bin/perl

open (INPUTFILE, "../engine.js") or die "Unable to open inputfile\n";
open (OUTPUTFILE, ">../engine_new.js") or die "Unable to open outputfile\n";

while (<INPUTFILE>) {
	my $line = $_;
	if ($line =~ /^(\s*)(.*)$/) {
		$line = $2;
	}
	if ($line =~ /^(\/\/)(.*)$/) {
		$line = "";
	}
	if ($line =~ /^(.*)(\/\/)(.*)$/) {
		$line = $1;
	}
	if ($line =~ /^(.*)(\s*)$/) {
		$line = $1;
	}

	########################
	# Members of vPosition #
	########################
	$line =~ s/vPosition\.fX/vPosition\.x/g;
	$line =~ s/vPosition\.fY/vPosition\.y/g;
	$line =~ s/vPosition\.fZ/vPosition\.z/g;
	$line =~ s/vPosition\.fRotate/vPosition\.r/g;
q^
	########################
	# Members of Object    #
	########################
	$line =~ s/\.iVert1/\.a/g;
	$line =~ s/\.iVert2/\.b/g;
	$line =~ s/\.iVert3/\.c/g;
	$line =~ s/\.iVert4/\.d/g;
	$line =~ s/\.iTexture/\.e/g;
	$line =~ s/\.iType/\.f/g;
	$line =~ s/\.iWidth/\.g/g;
	$line =~ s/\.iHeight/\.h/g;
	$line =~ s/\.iDrawnZ/\.i/g;
	$line =~ s/\.iDrawnLeft/\.j/g;
	$line =~ s/\.iDrawnWidth/\.k/g;
	$line =~ s/\.iDrawnMinWidth/\.l/g;
	$line =~ s/\.iDrawnMaxWidth/\.m/g;
	$line =~ s/\.iDrawnX/\.n/g;
	$line =~ s/\.iDrawnY/\.o/g;
	$line =~ s/\.eImages/\.p/g;
	$line =~ s/\.bVisible/\.q/g;
	$line =~ s/\.fNormalX/\.s/g;
	$line =~ s/\.fNormalZ/\.t/g;

	########################
	# Methods of Object    #
	########################
	$line =~ s/\.setVisible/\.u/g;
	$line =~ s/\.setZ/\.v/g;
	$line =~ s/\.draw/\.w/g;
	$line =~ s/\.checkCollision/\.x/g;
	$line =~ s/\.add/\.y/g;

	####################
	# Global variables #
	####################
	$line =~ s/iPanoramaLeft/a/g;
	$line =~ s/iFps/b/g;
	$line =~ s/iLastFps/c/g;
	$line =~ s/iUpdateCount/d/g;
	$line =~ s/fColDist/e/g;
	$line =~ s/iScreenWidth/f/g;
	$line =~ s/iScreenHeight/g/g;
	$line =~ s/iSpeed/h/g;
	$line =~ s/iZoom/i/g;

	$line =~ s/aiWalls/j/g;
	$line =~ s/aiSprites/k/g;
	$line =~ s/aVerts/l/g;
	$line =~ s/aKeys/m/g;
	$line =~ s/aIceObjects/n/g;
	$line =~ s/aObjects/o/g;
	$line =~ s/vPosition/p/g;

	$line =~ s/iCount/q/g;

	####################
	# Global functions #
	####################
	$line =~ s/SortByDistence/r/g;
	$line =~ s/AddImage/s/g;
	$line =~ s/InRange/t/g;
	$line =~ s/GetDiagonal/u/g;
	$line =~ s/Init/v/g;
	$line =~ s/Draw/w/g;
	$line =~ s/Update/x/g;

^ if 0;
	##############
	# Structures #
	##############
	$line =~ s/\s*{\s*/{/g;
	$line =~ s/\s*}\s*/}/g;
	$line =~ s/\s*\(\s*/\(/g;
	$line =~ s/\s*\)\s*/\)/g;
	$line =~ s/\s*=\s*/=/g;
	$line =~ s/\s*!=\s*/!=/g;
	$line =~ s/\s*\+\s*/\+/g;
	$line =~ s/\s*-\s*/-/g;
	$line =~ s/\s*\/\s*/\//g;
	$line =~ s/\s*\*\s*/\*/g;

	if ($line ne "") {
		print OUTPUTFILE $line;
		print OUTPUTFILE "\n";
	}
}
