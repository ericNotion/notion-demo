#!/usr/bin/env python3
"""Generate Harbor & Pine Kickoff Summary Slide Deck"""

from reportlab.lib.pagesizes import landscape, A4
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.pdfgen import canvas
from reportlab.platypus import Table, TableStyle
from reportlab.lib.colors import HexColor
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches

# Brand colors
DARK_TEAL = HexColor('#1B4D5C')
WARM_SAND = HexColor('#E8DCC4')
SOFT_GRAY = HexColor('#F5F5F5')
WHITE = colors.white
DARK_GRAY = HexColor('#333333')

# Page dimensions (landscape)
PAGE_WIDTH = 13.33 * inch
PAGE_HEIGHT = 7.5 * inch

def add_top_border(c):
    """Add colored accent border at top of slide"""
    c.setFillColor(DARK_TEAL)
    c.rect(0, PAGE_HEIGHT - 5, PAGE_WIDTH, 5, fill=1, stroke=0)

def add_slide_title(c, title, y_pos=PAGE_HEIGHT - 0.9*inch):
    """Add slide title"""
    c.setFont("Helvetica-Bold", 32)
    c.setFillColor(DARK_TEAL)
    c.drawString(0.8*inch, y_pos, title)

def create_timeline_image():
    """Create timeline visualization using matplotlib"""
    fig, ax = plt.subplots(figsize=(10, 2))
    ax.set_xlim(0, 10)
    ax.set_ylim(0, 2)
    ax.axis('off')
    
    # Timeline phases
    phases = [
        {"name": "Research &\nIA Phase", "start": 0, "width": 2.5, "color": "#1B4D5C"},
        {"name": "Wireframes\nBegin", "start": 3, "width": 2, "color": "#2D6D7F"},
        {"name": "High-Fidelity\nDesign", "start": 5.5, "width": 2, "color": "#4A8FA1"},
        {"name": "Photo Library\nArrival", "start": 8, "width": 1.5, "color": "#6AB1C3"},
    ]
    
    # Draw timeline bar
    for phase in phases:
        rect = mpatches.FancyBboxPatch(
            (phase["start"], 0.7), phase["width"], 0.6,
            boxstyle="round,pad=0.05", 
            facecolor=phase["color"],
            edgecolor='none',
            alpha=0.8
        )
        ax.add_patch(rect)
        
        # Add text
        ax.text(
            phase["start"] + phase["width"]/2, 0.3,
            phase["name"],
            ha='center', va='center',
            fontsize=10, color='#333333',
            weight='normal'
        )
    
    # Week labels
    ax.text(1.25, 1.5, "Week 1-2", ha='center', fontsize=9, color='#666666')
    ax.text(4, 1.5, "Week 3", ha='center', fontsize=9, color='#666666')
    ax.text(6.5, 1.5, "Week 4+", ha='center', fontsize=9, color='#666666')
    ax.text(8.75, 1.5, "~2 Weeks", ha='center', fontsize=9, color='#666666')
    
    # Save to file
    plt.tight_layout()
    plt.savefig('/tmp/timeline.png', format='png', dpi=150, bbox_inches='tight', facecolor='white')
    plt.close()
    return '/tmp/timeline.png'

def slide_1_title(c):
    """Title Slide"""
    add_top_border(c)
    
    # Background tint
    c.setFillColor(SOFT_GRAY)
    c.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, fill=1, stroke=0)
    add_top_border(c)
    
    # Main title
    c.setFont("Helvetica-Bold", 56)
    c.setFillColor(DARK_TEAL)
    c.drawCentredString(PAGE_WIDTH/2, PAGE_HEIGHT/2 + 1.2*inch, "Harbor & Pine")
    
    c.setFont("Helvetica", 38)
    c.setFillColor(DARK_GRAY)
    c.drawCentredString(PAGE_WIDTH/2, PAGE_HEIGHT/2 + 0.4*inch, "Website Redesign Kickoff")
    
    c.setFont("Helvetica", 24)
    c.setFillColor(DARK_GRAY)
    c.drawCentredString(PAGE_WIDTH/2, PAGE_HEIGHT/2 - 0.4*inch, "March 18, 2026")
    
    c.setFont("Helvetica-Oblique", 18)
    c.setFillColor(DARK_GRAY)
    c.drawCentredString(PAGE_WIDTH/2, PAGE_HEIGHT/2 - 1.2*inch, "Prepared for internal stakeholders")

def slide_2_agenda(c):
    """Agenda Slide"""
    add_top_border(c)
    add_slide_title(c, "Agenda")
    
    agenda_items = [
        "1.  About Harbor & Pine",
        "2.  Project Goals",
        "3.  Timeline & Phases",
        "4.  Team & Roles",
        "5.  Working Cadence",
        "6.  Key Risks & Blockers",
        "7.  Immediate Next Steps"
    ]
    
    c.setFont("Helvetica", 22)
    c.setFillColor(DARK_GRAY)
    y = PAGE_HEIGHT - 2.2*inch
    for item in agenda_items:
        c.drawString(1.5*inch, y, item)
        y -= 0.6*inch

def slide_3_about(c):
    """About Harbor & Pine"""
    add_top_border(c)
    add_slide_title(c, "About Harbor & Pine")
    
    content = [
        ("bullet", "Modern coastal lifestyle brand — home textiles, handcrafted ceramics, scent & bath"),
        ("bullet", "Founded 2019, Portland, Oregon (~15 employees)"),
        ("bold", "Brand pillars:"),
        ("italic", "Coastal simplicity · Sustainable sourcing · Small-batch craft · Intentional living"),
        ("bullet", "Primary channel: Shopify Plus DTC store (~70% revenue)"),
        ("bullet", "Design-conscious shoppers aged 28–45 who value quality over quantity")
    ]
    
    y = PAGE_HEIGHT - 2*inch
    for line_type, text in content:
        if line_type == "bold":
            c.setFont("Helvetica-Bold", 18)
            c.setFillColor(DARK_GRAY)
            c.drawString(1.2*inch, y, text)
        elif line_type == "italic":
            c.setFont("Helvetica-Oblique", 17)
            c.setFillColor(DARK_GRAY)
            c.drawString(1.5*inch, y, text)
        else:
            c.setFont("Helvetica", 18)
            c.setFillColor(DARK_GRAY)
            c.drawString(1.2*inch, y, "•")
            c.drawString(1.5*inch, y, text)
        y -= 0.5*inch

def slide_4_goals(c):
    """Project Goals"""
    add_top_border(c)
    add_slide_title(c, "Project Goals")
    
    goals = [
        ("Improve lead quality", 
         "Clarify messaging above the fold; current homepage doesn't clearly communicate what Harbor & Pine does"),
        ("Enhance navigation",
         "IA doesn't reflect how customers think about offerings; product pages are hard to find"),
        ("Align with updated brand identity",
         "New typeface, color palette, and photo direction from 2025 rebrand")
    ]
    
    y = PAGE_HEIGHT - 2*inch
    for title, desc in goals:
        c.setFont("Helvetica-Bold", 20)
        c.setFillColor(DARK_TEAL)
        c.drawString(1.2*inch, y, "•")
        c.drawString(1.5*inch, y, title)
        
        c.setFont("Helvetica", 16)
        c.setFillColor(DARK_GRAY)
        y -= 0.35*inch
        c.drawString(1.7*inch, y, desc)
        y -= 0.7*inch

def slide_5_divider_timeline(c):
    """Section Divider: Timeline & Delivery"""
    add_top_border(c)
    
    # Accent background
    c.setFillColor(DARK_TEAL)
    c.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, fill=1, stroke=0)
    add_top_border(c)
    
    c.setFont("Helvetica-Bold", 48)
    c.setFillColor(WHITE)
    c.drawCentredString(PAGE_WIDTH/2, PAGE_HEIGHT/2, "Timeline & Delivery")

def slide_6_timeline(c):
    """Timeline with visual"""
    add_top_border(c)
    add_slide_title(c, "Timeline")
    
    content = [
        ("bold", "Week 1–2:", " Research & IA phase — competitor analysis, analytics review, sitemap v1 draft"),
        ("bold", "Week 3:", " Begin wireframes"),
        ("bullet", "Structural work first, then high-fidelity design to avoid misalignment"),
        ("bullet", "Full photo library expected in ~2 weeks")
    ]
    
    c.setFillColor(DARK_GRAY)
    y = PAGE_HEIGHT - 2*inch
    for line_type, *parts in content:
        if line_type == "bold":
            c.setFont("Helvetica-Bold", 18)
            c.drawString(1.2*inch, y, "•")
            bold_text = parts[0]
            c.drawString(1.5*inch, y, bold_text)
            c.setFont("Helvetica", 18)
            c.drawString(1.5*inch + c.stringWidth(bold_text, "Helvetica-Bold", 18), y, parts[1])
        else:
            c.setFont("Helvetica", 18)
            c.drawString(1.2*inch, y, "•")
            c.drawString(1.5*inch, y, parts[0])
        y -= 0.5*inch
    
    # Add timeline visual
    timeline_path = create_timeline_image()
    c.drawImage(timeline_path, 1.2*inch, 1*inch, width=8*inch, height=1.6*inch, preserveAspectRatio=True)

def slide_7_team(c):
    """Team & Roles"""
    add_top_border(c)
    add_slide_title(c, "Team & Roles")
    
    # Create table
    team_data = [
        ['Maya Patel', 'Project Lead'],
        ['Jordan Kim', 'Harbor & Pine Stakeholder'],
        ['Avery Chen', 'Harbor & Pine Marketing Lead'],
        ['Priya Nair', 'Brand'],
        ['Sam Rivera', 'Ops']
    ]
    
    table = Table(team_data, colWidths=[3*inch, 3.5*inch])
    table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), SOFT_GRAY),
        ('TEXTCOLOR', (0, 0), (-1, -1), DARK_GRAY),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('FONTNAME', (0, 0), (0, -1), 'Helvetica-Bold'),
        ('FONTNAME', (1, 0), (1, -1), 'Helvetica'),
        ('FONTSIZE', (0, 0), (-1, -1), 18),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 15),
        ('TOPPADDING', (0, 0), (-1, -1), 15),
        ('LEFTPADDING', (0, 0), (-1, -1), 20),
        ('GRID', (0, 0), (-1, -1), 1, colors.white),
    ]))
    
    table.wrapOn(c, PAGE_WIDTH, PAGE_HEIGHT)
    table.drawOn(c, 1.5*inch, PAGE_HEIGHT - 5.5*inch)

def slide_8_cadence(c):
    """Working Cadence"""
    add_top_border(c)
    add_slide_title(c, "Working Cadence")
    
    content = [
        "Weekly check-ins: Tuesdays at 11:00 AM PT (shared async agenda)",
        "Internal Slack channel: #harbor-pine-web",
        "Single Notion hub as source of truth for all project materials",
        "Fast feedback loops — Harbor & Pine can turn around sitemap feedback within a couple of days"
    ]
    
    c.setFont("Helvetica", 18)
    c.setFillColor(DARK_GRAY)
    y = PAGE_HEIGHT - 2*inch
    for line in content:
        c.drawString(1.2*inch, y, "•")
        c.drawString(1.5*inch, y, line)
        y -= 0.5*inch

def slide_9_divider_risks(c):
    """Section Divider: Risks & Next Steps"""
    add_top_border(c)
    
    # Accent background
    c.setFillColor(DARK_TEAL)
    c.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, fill=1, stroke=0)
    add_top_border(c)
    
    c.setFont("Helvetica-Bold", 48)
    c.setFillColor(WHITE)
    c.drawCentredString(PAGE_WIDTH/2, PAGE_HEIGHT/2, "Risks & Next Steps")

def slide_10_risks(c):
    """Key Risks & Blockers"""
    add_top_border(c)
    add_slide_title(c, "Key Risks & Blockers")
    
    content = [
        ("bold", "SSO credentials for staging CMS", " still pending with Harbor & Pine IT"),
        ("indent", "Blocks early QA and content migration"),
        ("bullet", "Sam to escalate if no response by Wednesday; Jordan to ping IT lead internally"),
        ("bullet", "Team proceeds with sitemap and wireframes in the meantime"),
        ("bullet", "Marketing automation integration (lead capture → CRM) requires careful coordination")
    ]
    
    c.setFillColor(DARK_GRAY)
    y = PAGE_HEIGHT - 2*inch
    for line_type, *parts in content:
        if line_type == "bold":
            c.setFont("Helvetica-Bold", 18)
            c.drawString(1.2*inch, y, "•")
            c.drawString(1.5*inch, y, parts[0])
            c.setFont("Helvetica", 18)
            c.drawString(1.5*inch + c.stringWidth(parts[0], "Helvetica-Bold", 18), y, parts[1])
        elif line_type == "indent":
            c.setFont("Helvetica-Oblique", 16)
            c.drawString(1.7*inch, y, parts[0])
        else:
            c.setFont("Helvetica", 18)
            c.drawString(1.2*inch, y, "•")
            c.drawString(1.5*inch, y, parts[0])
        y -= 0.45*inch

def slide_11_next_steps(c):
    """Immediate Next Steps"""
    add_top_border(c)
    add_slide_title(c, "Immediate Next Steps")
    
    content = [
        "Create summary slide and send recap email to Jordan",
        "Set up #harbor-pine-web Slack channel",
        "Confirm brand asset access (logos, fonts, photo library)",
        "Gather 5 competitor homepage examples for inspiration",
        "Compile existing analytics (top pages, conversion funnels, bounce rates)",
        "Draft sitemap v1 and IA recommendations",
        "Consolidate all project materials into one Notion hub page",
        "Resolve SSO access for staging CMS"
    ]
    
    c.setFont("Helvetica", 17)
    c.setFillColor(DARK_GRAY)
    y = PAGE_HEIGHT - 2*inch
    for line in content:
        c.drawString(1.2*inch, y, "•")
        c.drawString(1.5*inch, y, line)
        y -= 0.4*inch

def slide_12_thank_you(c):
    """Thank You / Contact"""
    add_top_border(c)
    
    # Background tint
    c.setFillColor(SOFT_GRAY)
    c.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, fill=1, stroke=0)
    add_top_border(c)
    
    c.setFont("Helvetica-Bold", 42)
    c.setFillColor(DARK_TEAL)
    c.drawCentredString(PAGE_WIDTH/2, PAGE_HEIGHT/2 + 1*inch, "Let's build something beautiful together.")
    
    c.setFont("Helvetica", 28)
    c.setFillColor(DARK_GRAY)
    c.drawCentredString(PAGE_WIDTH/2, PAGE_HEIGHT/2 + 0.1*inch, "Harbor & Pine × Your Team")
    
    c.setFont("Helvetica-Oblique", 20)
    c.setFillColor(DARK_GRAY)
    c.drawCentredString(PAGE_WIDTH/2, PAGE_HEIGHT/2 - 0.8*inch, "Questions? Reach out to Maya Patel (Project Lead)")

def generate_pdf(filename):
    """Generate the complete PDF"""
    c = canvas.Canvas(filename, pagesize=(PAGE_WIDTH, PAGE_HEIGHT))
    
    # Generate all slides
    slide_1_title(c)
    c.showPage()
    
    slide_2_agenda(c)
    c.showPage()
    
    slide_3_about(c)
    c.showPage()
    
    slide_4_goals(c)
    c.showPage()
    
    slide_5_divider_timeline(c)
    c.showPage()
    
    slide_6_timeline(c)
    c.showPage()
    
    slide_7_team(c)
    c.showPage()
    
    slide_8_cadence(c)
    c.showPage()
    
    slide_9_divider_risks(c)
    c.showPage()
    
    slide_10_risks(c)
    c.showPage()
    
    slide_11_next_steps(c)
    c.showPage()
    
    slide_12_thank_you(c)
    
    c.save()
    print(f"✓ PDF generated: {filename}")

if __name__ == "__main__":
    generate_pdf("/workspace/notion-demo/Harbor_Pine_Kickoff_Summary.pdf")
