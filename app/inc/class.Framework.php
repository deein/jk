<?php

/**
 * Permet une gestion des pages en completion avec le .htacces utilisant l'URLRewite.
 * Ajoute des fonctionnalités de protection des pages.
 * 
 * @author		Pernot Florian
 *
 * @version		1.3.0
 * 
 */
 
class Framework {
 
 	// I love comments lol
 
 	/*
	-------------
	PRIVATE PROPS
	-------------
	*/
 	
	private $_default_page = "";
 	
	private $_current_page = "";
 	
	private $_error404 = "";
 
 	/*
	----------------
	PUBLIC FUNCTIONS
	----------------
	*/
	
 	public function getLink($file_uri) {
		$current = str_replace($this->_current_page,'',$_SERVER['REQUEST_URI']);
		$temp = explode('?',$current);
		$ret = $temp[0];
		echo $ret.$file_uri;
	}
	
 	public function parseLink($file_uri) {
		$current = str_replace($this->_current_page,'',$_SERVER['REQUEST_URI']);
		$temp = explode('?',$current);
		$ret = $temp[0];
		return $ret.$file_uri;
	}
	
	public function isCurrentPage($page) {
		$a = explode('/',$this -> get_nested_page());
		$ret = false;
		if($page == $a[sizeof($a) -  1]) $ret = true;
		return $ret;
	}
 
 	/*
	---------------
	PRIVATE METHODS
	---------------
	*/
	
	private function parse_link($matches) {
		$current = str_replace($this->_current_page,'',$_SERVER['REQUEST_URI']);
		$temp = explode('?',$current);
		$ret = $temp[0];
		return $ret.$matches[1];
	}
	
	private function get_include_contents($filename) {
		if(is_file($filename)) {
			ob_start();
			include $filename;
			$contents = ob_get_contents();
			ob_end_clean();
			return $contents;
		}
		return false;
	}
	
	private function get_nested_page() {
		$nested_page = "";
		if($this->_current_page == '') {
			$nested_page = $this->_default_page;
		} else {
			$nested_page = $this->_current_page;
		}
		while(substr($nested_page,strlen($nested_page) - 1,1) == '/') {
			$nested_page = substr($nested_page,0,strlen($nested_page) - 1);
		}	
		return $nested_page;
	}

 	/*
	-----------------
	GETTERS / SETTERS
	-----------------
	*/
	
 	public function default_page($value="") {
		if(empty($value)) {
			return $this->_default_page;
		} else {
			$this->_default_page = $value;
		}
	}
	
 	public function current_page($value="") {
		if(empty($value)) {
			$ret = $this->_current_page;
			while(substr($ret,strlen($ret) - 1,1) == '/') {
				$ret = substr($ret,0,strlen($ret) - 1);
			}
			$temp = explode('?',$ret);
			$ret = $temp[0];
			return $ret;
		} else {
			$this->_current_page = htmlspecialchars($value);
		}
	}
	
 	public function error404($value="") {
		if(empty($value)) {
			return $this->_error404;
		} else {
			$this->_error404 = $value;
		}
	}

 	/*
	-----------------
	RENDER FUNCTION
	-----------------
	*/
	
 	public function render() {
		$nested_page = $this -> get_nested_page();
		
		$nested_previous_page = '';
		$prev_array = explode('/',$nested_page);
		for($i = 0; $i < sizeof($prev_array) - 1; $i ++) {
			$nested_previous_page .= $prev_array[$i];
			if($i < sizeof($prev_array) - 2) $nested_previous_page .= '/';
		}

		if(file_exists('./views/'.$nested_previous_page.'/__all.php')) {
			$include = $this->get_include_contents('./views/'.$nested_previous_page.'/__all.php');
		} else {
			if(!file_exists('./views/'.$nested_page.'.php')) return $this->_error404;
			$include = $this->get_include_contents('./views/'.$nested_page.'.php');
		}
		$include = preg_replace_callback("#@\{([a-z0-9.\#_/\-?&=]+)\}#i",array(get_class($this),'parse_link'),$include);
		return $include;
	}
	
}

?>