<? $page=$_SERVER['REQUEST_URI'];?>

<nav>
   	<ul>
		<li><a <?if($page=="/"){echo "class='active'";}?> href="/">Home</a></li>
		<li><a <?if($page=="/services.php"){echo "class='active'";}?>href="services.php">Services</a></li>
		<li><a <?if($page=="/faq.php"){echo "class='active'";}?>href="faq.php">FAQ</a></li>
		<li><a <?if($page=="/contact.php"||$page=='/afterhours.php'||$page=='/officehours.php'){echo "class='active'";}?>href="contact.php">Contact</a>
			<ul id="contact">
				<li class="first"><a href="contact.php">Contact Us</a></li>
				<li><a href="officehours.php">Office Hours</a></li>
				<li class="last"><a href="afterhours.php">After Hours</a></li>
			</ul>
		</li>

	</ul>
</nav> 